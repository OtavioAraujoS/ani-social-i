import Link from "next/link";
import { RecentAdditionCard } from "../cards/RecentAdditionCard";

import { AnimeDetailResponse } from "@/services/api";

interface RecentAdditionsListProps {
  animes?: AnimeDetailResponse[] | null;
}

export function RecentAdditionsList({ animes }: RecentAdditionsListProps) {
  const displayAnimes =
    animes && animes.length > 0
      ? (animes as unknown as AnimeDetailResponse[])
      : [];

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

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {displayAnimes.map((item) => (
            <div
              key={`${item.id}-${item.title}`}
              className="flex-none w-40 md:w-50 snap-start"
            >
              <RecentAdditionCard anime={item} />
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-background/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
