import { IProfileTopics } from "@/interfaces/IProfile";

export function ProfileTopicsSection({
  topicsInfos,
}: {
  topicsInfos: IProfileTopics[];
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black italic">
          Tópicos <span className="text-blue-primary">Criados</span>
        </h2>
      </div>
      <div className="grid gap-4">
        {topicsInfos.map((topic) => (
          <div
            key={`${topic.title}_${topic.createdAt}`}
            className="glass-panel p-6 hover:bg-white/5 cursor-pointer transition-all border-l-2 border-l-transparent hover:border-l-blue-primary"
          >
            <h4 className="text-base font-bold mb-3">{topic.title}</h4>
            <div className="flex justify-between items-center">
              <span className="sanctuary-label text-[10px]">
                {topic.comments} Respostas
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
