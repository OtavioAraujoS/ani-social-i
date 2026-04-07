"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = document.cookie.includes("ani-social-token");
        if (token) {
          setUser({ name: "Otávio User", email: "otavio@gemini.ai" });
        }
      } catch (err) {
        console.error("Auth initialization failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = (userData: User, token: string) => {
    setUser(userData);
    document.cookie = `ani-social-token=${token}; path=/`;
    router.push("/home");
  };

  const logout = () => {
    setUser(null);
    document.cookie =
      "ani-social-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
