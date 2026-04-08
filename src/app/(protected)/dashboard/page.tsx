"use client";

import { useAuth } from "@/providers/AuthProvider";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-surface">
      <div className="p-12 space-y-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-[#00F0FF]">
            Olá, <span className="text-white">{user?.userName}</span>
          </h1>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
            Seu painel de controle seguro
          </p>
        </header>
      </div>
    </main>
  );
}
