import { cn } from "@/lib/utils";

interface CyberBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "cyan" | "gold" | "slate";
}

export function CyberBadge({
  children,
  className,
  variant = "cyan",
}: CyberBadgeProps) {
  const variants = {
    cyan: "bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 shadow-sm dark:shadow-[0_0_8px_rgba(34,211,238,0.2)]",
    gold: "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 shadow-sm dark:shadow-[0_0_8px_rgba(245,158,11,0.2)]",
    slate:
      "bg-slate-50 dark:bg-slate-500/10 border-slate-200 dark:border-slate-500/30 text-slate-700 dark:text-slate-400 shadow-sm dark:shadow-[0_0_8px_rgba(100,116,139,0.2)]",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-sm border",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
