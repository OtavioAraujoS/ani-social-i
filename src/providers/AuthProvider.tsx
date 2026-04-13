"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { redirect } from "next/navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const rehydrate = useAuthStore((s) => s.rehydrate);

  useEffect(() => {
    rehydrate();
  }, [rehydrate]);

  return <>{children}</>;
}

export function useAuth() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);

  const handleUnauthorized = () => {
    logout();
    redirect("/login");
  };

  return { user, isAuthenticated, login, logout, handleUnauthorized };
}
