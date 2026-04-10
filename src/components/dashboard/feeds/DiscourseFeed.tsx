import { ITopics } from "@/interfaces/ITopics";
import { DiscourseCard } from "../cards/DiscourseCard";
import { NeonButtonRedirect } from "@/components/NeonButtonRedirect";

interface DiscourseFeedProps {
  topics?: ITopics[];
}

export function DiscourseFeed({ topics }: DiscourseFeedProps) {
  const displayPosts = (topics && topics.length > 0 ? topics : []) as ITopics[];
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-cyan-600 dark:bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)] dark:shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-white">
            Tópicos Recentes
          </h2>
        </div>
        <NeonButtonRedirect
          href="/dashboard/topicos/criar"
          text="Criar Tópico"
          color="cyan"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {displayPosts.slice(0, 5).map((post) => (
          <DiscourseCard key={post.id} topic={post} />
        ))}
      </div>
    </section>
  );
}
