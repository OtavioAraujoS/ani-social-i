"use client";
import { useAuth } from "@/providers/AuthProvider";
import { RecentAdditionsList } from "@/components/dashboard/feeds/RecentAdditionsList";
import { DiscourseFeed } from "@/components/dashboard/feeds/DiscourseFeed";
import { ResidentsSidebar } from "@/components/dashboard/feeds/ResidentsSidebar";
import { MonoText } from "@/components/MonoText";
import { rankColors, rankTitles } from "@/app/(protected)/dashboard/rankTitles";
import { cn } from "@/lib/utils";

export function DashboardPageHandler() {
  const { user } = useAuth();
  const rank = user?.rank || "D";
  return (
    <div className="flex-1 space-y-12 p-6 md:p-10 lg:p-12 overflow-y-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant dark:border-white/5 pb-8">
        <div className="space-y-2">
          <MonoText className="text-cyan-600 dark:text-cyan-500/60">
            Acesso_Concedido
          </MonoText>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
            Bem-vindo(a),{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              {user?.userName || "Membro_do_Clã"}
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-4 bg-surface-container-lowest dark:bg-white/3 border border-outline-variant/30 dark:border-white/5 px-4 py-2 rounded-sm shadow-sm dark:shadow-none">
          <div className="text-right">
            <MonoText className="text-zinc-500 dark:text-[#747685] block">
              Cargo_no_Clã
            </MonoText>
            <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              {rankTitles[rank]}
            </span>
          </div>
          <div className="h-8 w-px bg-outline-variant/30 dark:bg-white/10" />
          <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/40 flex items-center justify-center">
            <span className={cn(rankColors[rank], "text-xs font-bold")}>
              {rank}
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 xl:col-span-9 space-y-16">
          <RecentAdditionsList />
          <DiscourseFeed />
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <div className="sticky top-12 p-6 rounded-lg border border-outline-variant dark:border-white/5 bg-surface-container-lowest dark:bg-white/2 backdrop-blur-sm shadow-sm dark:shadow-none">
            <ResidentsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
