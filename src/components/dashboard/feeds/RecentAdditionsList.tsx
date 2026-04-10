import Link from "next/link";
import { RecentAdditionCard } from "../cards/RecentAdditionCard";
import { recentAdditions } from "@/mock/dashboard";

export function RecentAdditionsList() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-amber-600 dark:bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)] dark:shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-white">
            Animes Cadastrados Recentemente
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/10 dark:bg-amber-500/20 p-2 rounded-sm">
          <div className="h-4 w-px bg-amber-500/30" />
          <Link
            href="/dashboard/animes/cadastrar"
            className="text-[9px] font-black tracking-[0.2em] uppercase text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            Cadastrar Anime
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recentAdditions.map((item) => (
          <RecentAdditionCard key={item.id} title={item.title} />
        ))}
      </div>
    </section>
  );
}
