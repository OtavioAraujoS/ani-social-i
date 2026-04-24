import { IAnime } from "@/interfaces/IAnime";
import { MonoText } from "../../MonoText";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ResidentItemProps {
  anime: IAnime;
}

export function ResidentItem({ anime }: ResidentItemProps) {
  return (
    <div className="group flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-surface-container dark:hover:bg-white/5">
      <div className="relative">
        {anime.updatedByUser?.avatarUrl ? (
          <Image
            src={anime?.updatedByUser?.avatarUrl}
            alt={anime?.updatedByUser?.name}
            width={56}
            height={56}
            unoptimized
            className="size-11 rounded-full bg-surface-container-high dark:bg-slate-800 border border-outline-variant dark:border-white/10 flex items-center justify-center text-xs font-bold text-zinc-900 dark:text-white overflow-hidden"
          />
        ) : (
          <div className="size-11 rounded-full bg-surface-container-high dark:bg-slate-800 border border-outline-variant dark:border-white/10 flex items-center justify-center text-xs font-bold text-zinc-900 dark:text-white overflow-hidden">
            {anime?.updatedByUser?.name.charAt(0)}
          </div>
        )}
        <div
          className={cn(
            "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-surface dark:border-[#0a0e14]",
            anime?.status === "COMPLETED"
              ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] dark:shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              : anime?.status === "RELEASING"
                ? "bg-amber-500"
                : "bg-slate-500 dark:bg-slate-600",
          )}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <span className="text-sm md:text-md font-bold text-zinc-900 dark:text-white/90 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-none">
            {anime?.updatedByUser?.name}
          </span>
        </div>
        <div className="flex items-baseline gap-1.5 mt-1">
          <MonoText className="text-[0.7rem] text-zinc-500 dark:text-[#747685] shrink-0 uppercase tracking-wider">
            Assistindo
          </MonoText>
          <span className="text-[0.8rem] text-zinc-400 dark:text-[#747685]/70 truncate font-medium">
            {anime?.title}
          </span>
        </div>
      </div>
    </div>
  );
}
