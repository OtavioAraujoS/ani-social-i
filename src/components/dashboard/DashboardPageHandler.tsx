"use client";
import { useAuth } from "@/providers/AuthProvider";
import { RecentAdditionsList } from "@/components/dashboard/feeds/RecentAdditionsList";
import { DiscourseFeed } from "@/components/dashboard/feeds/DiscourseFeed";
import { ResidentsSidebar } from "@/components/dashboard/feeds/ResidentsSidebar";
import { MonoText } from "@/components/MonoText";
import { rankColors, rankTitles } from "@/app/(protected)/dashboard/rankTitles";
import { cn } from "@/lib/utils";

import { DashboardResponse } from "@/services/api";

import { Rank } from "@/lib/jwt";
import { IAnime } from "@/interfaces/IAnime";

interface DashboardPageHandlerProps {
  dashboardData: DashboardResponse | null;
}

export function DashboardPageHandler({
  dashboardData,
}: DashboardPageHandlerProps) {
  const { user } = useAuth();
  const rank = (user?.rank as Rank) || "D";
  return (
    <div className="flex-1 space-y-8 md:space-y-12 p-4 md:p-10 lg:p-12 overflow-y-auto scrollbar-hide">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 border-b border-outline-variant dark:border-white/5 pb-6 md:pb-8">
        <div className="space-y-1 md:space-y-1.5">
          <MonoText className="text-[10px] md:text-xs text-cyan-600 dark:text-cyan-500/60 uppercase tracking-[0.2em]">
            Acesso_Concedido
          </MonoText>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase leading-none">
            Bem-vindo(a),{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              {user?.userName || "Membro_do_Clã"}
            </span>
          </h1>
        </div>

        <div className="h-full w-full md:w-auto flex items-center justify-between md:justify-start gap-3 md:gap-4 bg-surface-container-lowest dark:bg-white/3 border border-outline-variant/30 dark:border-white/5 px-5 py-4 md:px-4 md:py-2.5 rounded-sm shadow-sm dark:shadow-none transition-all">
          <div className="flex flex-col md:text-right">
            <MonoText className="text-[9px] md:text-[10px] text-zinc-500 dark:text-[#747685] uppercase tracking-[0.2em] md:tracking-tighter">
              Cargo_no_Clã
            </MonoText>
            <span className="text-lg md:text-xs font-black md:font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              {rankTitles[rank]}
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-4 shrink-0">
            <div className="h-10 md:h-8 w-px bg-outline-variant/30 dark:bg-white/10" />
            <div className="w-12 h-12 md:w-8 md:h-8 rounded-full bg-cyan-50 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.1)] dark:shadow-none">
              <span
                className={cn(
                  rankColors[rank],
                  "text-xl md:text-xs font-black uppercase",
                )}
              >
                {rank}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 xl:col-span-9 space-y-16">
          <RecentAdditionsList animes={dashboardData?.recentAnimes} />
          <DiscourseFeed topics={dashboardData?.recentTopics} />
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <div className="sticky top-12 p-6 rounded-lg border border-outline-variant dark:border-white/5 bg-surface-container-lowest dark:bg-white/2 backdrop-blur-sm shadow-sm dark:shadow-none">
            <ResidentsSidebar
              residents={dashboardData?.releasingAnimes as unknown as IAnime[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
