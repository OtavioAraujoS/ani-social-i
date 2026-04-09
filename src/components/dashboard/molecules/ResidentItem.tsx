import { MonoText } from "../../MonoText";
import { cn } from "@/lib/utils";

interface ResidentItemProps {
  name: string;
  watching: string;
  status: "online" | "idle" | "offline";
}

export function ResidentItem({ name, watching, status }: ResidentItemProps) {
  return (
    <div className="group flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-surface-container dark:hover:bg-white/5">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-surface-container-high dark:bg-slate-800 border border-outline-variant dark:border-white/10 flex items-center justify-center text-xs font-bold text-zinc-900 dark:text-white overflow-hidden">
          {name.charAt(0)}
        </div>
        <div
          className={cn(
            "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-surface dark:border-[#0a0e14]",
            status === "online"
              ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] dark:shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              : status === "idle"
                ? "bg-amber-500"
                : "bg-slate-500 dark:bg-slate-600",
          )}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-900 dark:text-white/90 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {name}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <MonoText className="text-[0.7rem] text-zinc-500 dark:text-[#747685]">
            Assistindo
          </MonoText>
          <span className="text-[0.7rem] text-zinc-500 dark:text-[#747685] truncate max-w-30">
            {watching}
          </span>
        </div>
      </div>
    </div>
  );
}
