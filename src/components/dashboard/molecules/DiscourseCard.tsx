import Link from "next/link";
import { CyberBadge } from "../../CyberBadge";
import { MonoText } from "../../MonoText";

interface DiscourseCardProps {
  title: string;
  excerpt: string;
  category: string;
  ref: string;
}

export function DiscourseCard({
  title,
  excerpt,
  category,
  ref,
}: DiscourseCardProps) {
  return (
    <div className="group space-y-3 rounded-lg border border-outline-variant/30 dark:border-white/5 bg-surface-container-lowest dark:bg-white/3 p-6 transition-all hover:bg-surface-container dark:hover:bg-white/6 hover:border-cyan-500/20 shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between">
        <CyberBadge variant={category === "NEWS" ? "gold" : "cyan"}>
          {category}
        </CyberBadge>
        <MonoText className="text-[9px] text-zinc-400 dark:text-white/30">
          REF: {ref}
        </MonoText>
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-semibold leading-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-[#747685] line-clamp-2 italic">
          &quot;{excerpt}&quot;
        </p>
      </div>

      <div className="flex items-center pt-2">
        <Link
          href={`/dashboard/topicos/${ref}`}
          className="text-[10px] uppercase tracking-widest text-cyan-600 dark:text-cyan-500/60 hover:text-cyan-500 dark:hover:text-cyan-400 font-bold transition-colors"
        >
          Acessar Tópico →
        </Link>
      </div>
    </div>
  );
}
