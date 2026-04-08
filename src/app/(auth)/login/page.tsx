"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    login({ name: "Otávio User", email: "otavio@gemini.ai" }, "mock-jwt-token");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black text-[#00F0FF]">Login / Acesso</h1>
        <p className="text-white/50">
          Entre no sanctuary protocol para continuar
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4 p-8 bg-[#121316]/40 backdrop-blur-2xl border border-[#00F0FF]/10 rounded-2xl">
        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#00F0FF] text-black hover:bg-[#00F1FF]/80 rounded-full py-6 font-bold"
        >
          {loading ? "Confirmando..." : "Entrar como Visitante"}
        </Button>
      </div>
    </div>
  );
}
