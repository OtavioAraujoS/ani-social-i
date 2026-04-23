"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CollectionDialog } from "./CollectionDialog";
import { IFilterList, PagesFilter } from "../PagesFilter";

const collectionFilters: IFilterList[] = [
  { title: "Todos", param: "todos" },
  { title: "Planejados", param: "pendente" },
  { title: "Assistindo", param: "assistindo" },
  { title: "Concluídos", param: "concluidos" },
];

export function CollectionHeader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm === searchParams.get("title")) return;

    if (searchTerm) {
      params.set("title", searchTerm);
      params.set("page", "1");
    } else {
      params.delete("title");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleFilterChange = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (filter && filter !== "todos") {
      params.set("status", filter);
    } else {
      params.delete("status");
    }

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-between items-center gap-4 lg:gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-[#8899a6] dark:text-[#94a3b8] text-xs font-bold tracking-widest uppercase">
            Coleção de Animes
          </p>
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight tracking-tight text-[#0a1128] dark:text-[#f1f5f9]">
            Minha Coleção
          </h1>
        </div>
        <CollectionDialog />
      </div>

      <PagesFilter
        filterList={collectionFilters}
        initialSearch={searchParams.get("title")?.toString()}
        onSearch={handleSearch}
        onSelectedFilter={handleFilterChange}
        searchPlaceholder="Buscar títulos na coleção..."
      />
    </header>
  );
}
