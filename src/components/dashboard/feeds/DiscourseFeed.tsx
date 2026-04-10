import Link from "next/link";
import { DiscourseCard } from "../cards/DiscourseCard";
import { discoursePosts } from "@/mock/dashboard";

export function DiscourseFeed() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-cyan-600 dark:bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)] dark:shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-white">
            Tópicos Recentes
          </h2>
        </div>
        <button className="flex items-center gap-2 bg-[#4c6ef5] hover:bg-[#3b5bdb] text-white px-3 py-1 rounded-sm transition-colors">
          <Link
            href="/dashboard/topicos"
            className="flex items-center cursor-pointer text-center py-1"
          >
            <span className="text-[9px] font-black tracking-widest uppercase">
              Novo Tópico
            </span>
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {discoursePosts.slice(0, 5).map((post) => (
          <DiscourseCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
