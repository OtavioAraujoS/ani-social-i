import { ResidentItem } from "../cards/ResidentItem";
import { MonoText } from "../../MonoText";
import { IAnime } from "@/interfaces/IAnime";

interface ResidentsSidebarProps {
  residents?: IAnime[];
}

export function ResidentsSidebar({ residents }: ResidentsSidebarProps) {
  const displayResidents = residents && residents.length > 0 ? residents : [];

  return (
    <aside className="space-y-6">
      <div className="flex flex-wrap items-center justify-between border-b border-outline-variant dark:border-white/5 pb-4 gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-cyan-600 dark:bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)] dark:shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-white">
            Usuários
          </h2>
        </div>
        <MonoText className="text-zinc-500 dark:text-[#747685]">
          {displayResidents?.length} Ativos
        </MonoText>
      </div>

      <div className="space-y-4">
        {displayResidents.slice(0, 5).map((resident) => (
          <ResidentItem key={resident.id} anime={resident} />
        ))}
      </div>
    </aside>
  );
}
