import Image from "next/image";
import { AnimeDetailResponse } from "@/services/api";
import { MonoText } from "../../MonoText";

interface RecentAdditionCardProps {
  anime: AnimeDetailResponse;
}

export function RecentAdditionCard({ anime }: RecentAdditionCardProps) {
  const imageSource = anime.imageUrl || "/notFoundPicture.png";
  return (
    <div className="group relative aspect-2/3 overflow-hidden rounded-md border border-outline-variant/30 dark:border-white/5 bg-surface-container-lowest dark:bg-white/2 transition-all hover:bg-surface-container dark:hover:bg-white/5 hover:border-cyan-500/30 shadow-sm dark:shadow-none">
      <Image
        src={imageSource}
        alt={anime.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:from-black/95" />

      <div className="absolute inset-x-0 bottom-0 p-3 space-y-1">
        <MonoText className="text-[9px] text-cyan-500/80 dark:text-cyan-400/60 block truncate uppercase tracking-tighter">
          {anime.createdByUser?.name || "Anonymous"}
        </MonoText>
        <h3 className="text-xs font-bold leading-tight tracking-wider text-white line-clamp-2 uppercase">
          {anime.title}
        </h3>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}
