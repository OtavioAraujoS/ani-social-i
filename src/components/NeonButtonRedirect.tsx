import { cn } from "@/lib/utils";
import Link from "next/link";

export function NeonButtonRedirect({
  href,
  text,
  color = "cyan",
}: {
  href: string;
  text: string;
  color?: "cyan" | "amber";
}) {
  const colorVariants = {
    cyan: {
      bg: "bg-cyan-500/10 dark:bg-cyan-500/20 cursor-pointer",
      line: "bg-cyan-500/30",
      text: "text-cyan-600 dark:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400",
    },
    amber: {
      bg: "bg-amber-500/10 dark:bg-amber-500/20 cursor-pointer",
      line: "bg-amber-500/30",
      text: "text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400",
    },
  };

  const variant = colorVariants[color];
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 p-2 rounded-sm",
        variant.bg,
        "cursor-pointer",
      )}
      prefetch={false}
    >
      <div className={cn("h-4 w-px", variant.line)} />
      <div
        className={cn(
          "text-[9px] font-black tracking-[0.2em] uppercase transition-colors",
          variant.text,
        )}
      >
        {text}
      </div>
    </Link>
  );
}
