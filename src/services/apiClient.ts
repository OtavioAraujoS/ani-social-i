import { LoginResponse, RegisterResponse } from "@/interfaces/ILoginRegister";
import { Api, type HttpResponse } from "./api";

export const apiClient = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
});

async function parseResponse<T>(response: Response): Promise<T> {
  return response.json() as Promise<T>;
}

export const authService = {
  login: async (credentials: {
    userName: string;
    password: string;
  }): Promise<LoginResponse> => {
    const response = await apiClient.api.postApiAuthLogin(credentials);
    return parseResponse<LoginResponse>(response);
  },

  register: async (data: {
    name: string;
    userName: string;
    password: string;
  }): Promise<RegisterResponse> => {
    const response = await apiClient.api.postApiUsers(data);
    return parseResponse<RegisterResponse>(response);
  },
};

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function getApiError(err: unknown): ApiError {
  if (isHttpResponse(err)) {
    const status = err.status;
    const body = err.error as Record<string, unknown> | null;
    const message =
      (typeof body?.message === "string" && body.message) ||
      (typeof body?.error === "string" && body.error) ||
      httpStatusMessage(status);
    return new ApiError(status, message);
  }

  if (err instanceof Error) {
    return new ApiError(0, err.message);
  }

  return new ApiError(0, "Erro inesperado. Tente novamente.");
}

function isHttpResponse(err: unknown): err is HttpResponse<unknown, unknown> {
  return (
    typeof err === "object" &&
    err !== null &&
    "status" in err &&
    "ok" in err &&
    "error" in err
  );
}

function httpStatusMessage(status: number): string {
  const messages: Record<number, string> = {
    400: "Requisição inválida.",
    401: "Credenciais inválidas.",
    403: "Acesso negado.",
    404: "Usuário não encontrado.",
    409: "Conflito: dado já existente.",
    422: "Dados inválidos.",
    429: "Muitas tentativas. Aguarde e tente novamente.",
    500: "Erro interno no servidor.",
    503: "Serviço indisponível.",
  };
  return messages[status] ?? `Erro ${status}. Tente novamente.`;
}
