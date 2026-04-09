import { MonoText } from "../../MonoText";

interface RecentAdditionCardProps {
  title: string;
}

export function RecentAdditionCard({ title }: RecentAdditionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-md border border-outline-variant/30 dark:border-white/5 bg-surface-container-lowest dark:bg-white/2 p-4 transition-all hover:bg-surface-container dark:hover:bg-white/5 hover:border-cyan-500/30 shadow-sm dark:shadow-none">
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <MonoText className="text-zinc-400 dark:text-white/40 block mb-1">
        Usuário X adicionou
      </MonoText>
      <h3 className="text-sm font-bold tracking-wider text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
    </div>
  );
}
