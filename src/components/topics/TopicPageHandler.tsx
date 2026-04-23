"use client";
import { PaginationFooter } from "@/components/PaginationFooter";
import { IFilterList, PagesFilter } from "@/components/PagesFilter";
import { TopicsHeader } from "@/components/topics/TopicsHeader";
import { TopicRow } from "@/components/topics/TopicRows";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ITopics } from "@/interfaces/ITopics";

const topicsFilter: IFilterList[] = [
  {
    title: "Mais recentes",
    param: "LATEST",
  },
  {
    title: "Popular",
    param: "POPULAR",
  },
  {
    title: "Sem Resposta",
    param: "NO_COMMENTS",
  },
];

interface TopicPageHandlerProps {
  topics: ITopics[];
  totalTopics: number;
  currentPage: number;
  limit: number;
}

export function TopicPageHandler({
  topics,
  totalTopics,
  currentPage,
  limit,
}: TopicPageHandlerProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm === searchParams.get("search")) return;

    if (searchTerm) {
      params.set("search", searchTerm);
      params.set("page", "1");
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleFilterChange = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("orderBy", filter);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <main className="flex-1 space-y-8 md:space-y-12 p-10 lg:p-12 overflow-y-auto">
      <TopicsHeader />

      <PagesFilter
        filterList={topicsFilter}
        initialSearch={searchParams.get("search")?.toString()}
        onSearch={handleSearch}
        onSelectedFilter={handleFilterChange}
        searchPlaceholder="Buscar tópicos..."
      />

      <div className="space-y-4 relative z-10">
        <div className="hidden md:grid grid-cols-12 px-8 py-2 text-slate-500 font-black uppercase text-[10px] tracking-widest">
          <div className="col-span-6">Título do Tópico</div>
          <div className="col-span-2">Criado por</div>
          <div className="col-span-3 text-center">Anime</div>
          <div className="col-span-1 text-right">Respostas</div>
        </div>

        <div className="space-y-3">
          {topics.map((topic) => (
            <TopicRow key={topic.id} topic={topic} />
          ))}
        </div>
      </div>

      <PaginationFooter
        collectionLength={totalTopics}
        currentPage={currentPage}
        limit={limit}
      />
    </main>
  );
}
