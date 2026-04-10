import { ResidentItem } from "../cards/ResidentItem";
import { residents } from "@/mock/dashboard";
import { MonoText } from "../../MonoText";

export function ResidentsSidebar() {
  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant dark:border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-cyan-600 dark:bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)] dark:shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-white">
            Usuários
          </h2>
        </div>
        <MonoText className="text-zinc-500 dark:text-[#747685]">
          {residents.length} Ativos
        </MonoText>
      </div>

      <div className="space-y-4">
        {residents.slice(0, 5).map((resident) => (
          <ResidentItem key={resident.id} {...resident} />
        ))}
      </div>
    </aside>
  );
}
