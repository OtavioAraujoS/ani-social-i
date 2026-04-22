import { LoginResponse, RegisterResponse } from "@/interfaces/ILoginRegister";
import { Api, type HttpResponse } from "./api";
import { decodeJwt, isTokenExpired } from "@/lib/jwt";

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

      if (!token) {
        const { getCookie } = await import("@/lib/cookie");
        token = getCookie("ani-social-token");
      }

      if (!token) {
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return {};
      }

      try {
        const payload = decodeJwt(token);
        if (isTokenExpired(payload)) {
          if (useAuthStore.getState().logout) {
            useAuthStore.getState().logout();
          }
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
          return {};
        }
      } catch {
        if (useAuthStore.getState().logout) {
          useAuthStore.getState().logout();
        }
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return {};
      }
    } else {
      try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        token = cookieStore.get("ani-social-token")?.value;
      } catch {}
    }

    if (!token) {
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

function normalizeErrorMessage(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  const errorMatch = trimmed.match(/(?:^| - )Error:\s*(.+)$/i);
  if (errorMatch?.[1]) {
    return errorMatch[1].trim();
  }

  if (/^Error:\s*/i.test(trimmed)) {
    return trimmed.replace(/^Error:\s*/i, "").trim();
  }

  return trimmed.length > 0 ? trimmed : undefined;
}

function safeErrorMessage(value: unknown, fallback: string): string {
  if (typeof value === "string") {
    return normalizeErrorMessage(value) ?? fallback;
  }

  if (value instanceof Error) {
    return normalizeErrorMessage(value.message) ?? fallback;
  }

  if (typeof value === "object" && value !== null) {
    const body = value as Record<string, unknown>;
    const messageValue =
      typeof body.message === "string"
        ? body.message
        : typeof body.error === "string"
          ? body.error
          : undefined;
    return normalizeErrorMessage(messageValue) ?? fallback;
  }

  return fallback;
}

export function getApiError(err: unknown): ApiError {
  try {
    if (err instanceof ApiError) return err;

    if (isHttpResponse(err)) {
      const status = err.status;
      const message = safeErrorMessage(err.error, httpStatusMessage(status));
      return new ApiError(status, String(message));
    }

    if (err instanceof Error) {
      return new ApiError(0, err.message);
    }

    return new ApiError(0, "Erro inesperado. Tente novamente.");
  } catch {
    return new ApiError(0, "Erro ao processar resposta do servidor.");
  }
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
