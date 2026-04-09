import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { decodeJwt, isTokenExpired, type JwtPayload } from "@/lib/jwt";

const COOKIE_NAME = "ani-social-token";

function setCookie(token: string, exp: number) {
  const expires = new Date(exp * 1000).toUTCString();
  document.cookie = `${COOKIE_NAME}=${token}; path=/; expires=${expires}; SameSite=Lax`;
}

function clearCookie() {
  document.cookie = `${COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax`;
}

export interface AuthUser {
  userId: string;
  userName: string;
  role: string;
  createdAt: string;
  exp: number;
  avatar: string;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  login: (token: string) => void;
  logout: () => void;
  rehydrate: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (token: string) => {
        let payload: JwtPayload;
        try {
          payload = decodeJwt(token);
        } catch {
          throw new Error("Token recebido é inválido.");
        }

        if (isTokenExpired(payload)) {
          throw new Error("Token expirado.");
        }

        const user: AuthUser = {
          userId: payload.userId,
          userName: payload.userName,
          role: payload.role,
          createdAt: payload.createdAt,
          exp: payload.exp,
          avatar: payload.avatar,
        };

        set({ user, token, isAuthenticated: true });
        setCookie(token, payload.exp);
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        clearCookie();
      },

      rehydrate: () => {
        const { token } = get();
        if (!token) return;

        try {
          const payload = decodeJwt(token);
          if (isTokenExpired(payload)) {
            get().logout();
          }
        } catch {
          get().logout();
        }
      },
    }),
    {
      name: "ani-social-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
