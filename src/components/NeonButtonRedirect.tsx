import Link from "next/link";

export function NeonButtonRedirect({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 bg-${color}-500/10 dark:bg-${color}-500/20 p-2 rounded-sm`}
    >
      <div className={`h-4 w-px bg-${color}-500/30`} />
      <Link
        href={href}
        className={`text-[9px] font-black tracking-[0.2em] uppercase text-${color}-600 dark:text-${color}-500 hover:text-${color}-500 dark:hover:text-${color}-400 transition-colors`}
      >
        {text}
      </Link>
    </div>
  );
}
