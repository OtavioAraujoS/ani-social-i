import { IProfileTopics } from "@/interfaces/IProfile";
import Link from "next/link";

export function ProfileTopicsSection({
  topicsInfos,
}: {
  topicsInfos: IProfileTopics[];
}) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-black italic">
          Tópicos <span className="text-blue-primary">Criados</span>
        </h2>
      </div>
      <div className="flex gap-4">
        {topicsInfos.map((topic) => (
          <Link
            href={`/topicos/${topic.id}`}
            key={`${topic.title}_${topic.createdAt}`}
            className="glass-panel pt-4 pb-1 px-6 hover:bg-white/5 cursor-pointer transition-all border-l-2 border-l-transparent hover:border-l-blue-primary"
          >
            <h4 className="text-base font-bold mb-3">{topic.title}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
