"use client";

import { AnimeListResponse } from "@/services/api";
import Image from "next/image";
import { Badge } from "../Badge";
import { CollectionHeader } from "./CollectionHeader";
import { CollectionFooter } from "./CollectionFooter";

interface CollectionPageHandlerProps {
  collectionsData: AnimeListResponse;
  currentPage: number;
  limit: number;
}

export function CollectionPageHandler({
  collectionsData,
  currentPage,
  limit,
}: CollectionPageHandlerProps) {
  return (
    <div className="h-full flex flex-col bg-[#f4f6f8] dark:bg-[#0f1113] w-full pt-10 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300 selection:bg-[#5b87e5] selection:text-white">
      <div className="flex flex-col flex-1 gap-10 w-full px-10 pb-6">
        <CollectionHeader />

        {collectionsData && collectionsData.total > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5">
            {collectionsData.data.map((anime) => (
              <div
                key={anime.id}
                className="group relative flex flex-col bg-white dark:bg-[#1a1c1e] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border border-[#eaedf1] dark:border-[#2d3135]"
              >
                <div className="relative w-full aspect-2/3 overflow-hidden bg-[#eef1f5] dark:bg-[#25282c]">
                  <Image
                    src={anime.imageUrl || "/notFoundPicture.png"}
                    alt={anime.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={500}
                    height={750}
                  />
                  <Badge status={anime.status} />
                </div>

                <div className="p-4 pt-6 flex flex-col gap-1 flex-1 justify-between bg-white dark:bg-[#1a1c1e] z-0">
                  <h3 className="font-bold text-[#0a1128] dark:text-[#f1f5f9] text-[0.95rem] leading-snug line-clamp-1">
                    {anime.title}
                  </h3>
                  <p className="text-[#8899a6] dark:text-[#94a3b8] text-[0.65rem] font-bold tracking-widest uppercase">
                    EPISÓDIO {anime.episodes || 0}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-75 bg-white dark:bg-[#1a1c1e] rounded-2xl border border-[#eaedf1] dark:border-[#2d3135] shadow-sm">
            <p className="text-[#8899a6] dark:text-[#94a3b8]">
              Nenhum anime na coleção ainda.
            </p>
          </div>
        )}
        <CollectionFooter
          collectionLength={collectionsData.total}
          currentPage={currentPage}
          limit={limit}
        />
      </div>
    </div>
  );
}
