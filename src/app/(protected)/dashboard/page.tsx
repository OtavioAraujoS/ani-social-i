"use client";

import { useAuth } from "@/providers/AuthProvider";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="p-12 space-y-6">
      <h1 className="text-4xl font-black text-[#00F0FF]">Dashboard Privado</h1>
      <div className="bg-[#121316]/40 backdrop-blur-2xl border border-[#00F0FF]/10 rounded-2xl p-8">
        <p className="text-white/70">Bem-vindo, <span className="text-[#00F0FF] font-bold">{user?.name}</span>!</p>
        <p className="text-white/40 mt-2">Esta rota é protegida pelo middleware via JWT.</p>
      </div>
    </div>
  );
}
