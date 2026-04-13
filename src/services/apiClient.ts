import { LoginResponse, RegisterResponse } from "@/interfaces/ILoginRegister";
import { Api, type HttpResponse } from "./api";

export const apiClient = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  baseApiParams: {
    secure: true,
  },
  securityWorker: async () => {
    let token: string | undefined | null;

    if (typeof window !== "undefined") {
      const { useAuthStore } = await import("@/stores/authStore");
      token = useAuthStore.getState().token;

      if (token) {
        console.log(
          "[apiClient] Token retrieved from authStore (Client):",
          true,
        );
      } else {
        const { getCookie } = await import("@/lib/cookie");
        token = getCookie("ani-social-token");
        console.log(
          "[apiClient] Token retrieved from cookies (Client):",
          !!token,
        );
      }
    } else {
      try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        token = cookieStore.get("ani-social-token")?.value;
        console.log(
          "[apiClient] Token retrieved from cookies (Server):",
          !!token,
        );
      } catch (error) {
        console.warn("[apiClient] Failed to access cookies on server:", error);
      }
    }

    if (!token) {
      console.warn(
        "[apiClient] No token found. Request will be sent without Authorization header.",
      );
      return {};
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
});

async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");
  if (contentType && !contentType.includes("application/json")) {
    throw new ApiError(
      response.status,
      `O servidor retornou um formato inesperado (${contentType}). Verifique se a API está online.`,
    );
  }
  return response.json() as Promise<T>;
}

export const authService = {
  login: async (credentials: {
    userName: string;
    password: string;
  }): Promise<LoginResponse> => {
    const response = await apiClient.auth.postAuthLogin(credentials);
    return parseResponse<LoginResponse>(response);
  },

  register: async (data: {
    name: string;
    userName: string;
    password: string;
  }): Promise<RegisterResponse> => {
    const response = await apiClient.users.postUsers(data);
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
