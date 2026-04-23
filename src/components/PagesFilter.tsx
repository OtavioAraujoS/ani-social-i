import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export interface IFilterList {
  title: string;
  param: string;
}

interface PagesFilterProps {
  filterList: IFilterList[];
  searchPlaceholder?: string;
  initialSearch?: string;
  onSelectedFilter: (selectedFilter: string) => void;
  onSearch: (search: string) => void;
}

export function PagesFilter({
  filterList,
  searchPlaceholder,
  initialSearch = "",
  onSelectedFilter,
  onSearch,
}: PagesFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    filterList[0]?.param,
  );
  const [localSearch, setLocalSearch] = useState<string>(initialSearch);
  const debouncedSearch = useDebounce(localSearch, 400);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    onSelectedFilter(filter);
  };
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between glass-panel rounded-3xl xl:rounded-full px-6 py-6 xl:py-3 mb-8 gap-5 border border-black/10 dark:border-white/20 relative z-10 w-full">
      <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 md:gap-6 w-full xl:w-auto">
        <span className="cursor-pointer text-on-surface dark:text-on-surface-dark font-bold uppercase text-[10px] tracking-widest whitespace-nowrap">
          Ordenar por:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filterList.map((filter) => (
            <button
              key={filter.param}
              className={`cursor-pointer text-on-surface dark:text-on-surface-dark font-bold text-xs uppercase tracking-widest border-b whitespace-nowrap ${
                selectedFilter === filter.param
                  ? "border-primary"
                  : "border-transparent"
              }`}
              onClick={() => handleSelectFilter(filter.param)}
            >
              {filter.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center bg-surface-container-lowest/50 rounded-full px-4 py-2.5 border border-black/10 dark:border-white/20 w-auto min-w-full lg:min-w-fit lg:w-160">
        <Search className="w-4 h-4 text-slate-500 shrink-0" />
        <input
          className="bg-transparent dark:bg-surface-container-lowest/50 border-none focus:ring-0 text-xs w-full text-on-surface placeholder:text-slate-600 p-0 ml-2 outline-none"
          placeholder={searchPlaceholder}
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
}
