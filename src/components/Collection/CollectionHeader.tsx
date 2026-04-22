"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CollectionDialog } from "./CollectionDialog";

export function CollectionHeader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("title")?.toString() || "",
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (searchTerm) {
        params.set("title", searchTerm);
        params.set("page", "1");
      } else {
        params.delete("title");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, pathname, replace]);
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-[#8899a6] dark:text-[#94a3b8] text-xs font-bold tracking-widest uppercase">
          Coleção de Animes
        </p>
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight tracking-tight text-[#0a1128] dark:text-[#f1f5f9]">
          Minha Coleção
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#8899a6] dark:text-[#5c6975]" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar títulos..."
            className="w-full bg-[#f8f9fa] dark:bg-[#1a1c1e] border border-[#a8abaf] dark:border-[#2d3135] rounded-full py-3.5 pl-12 pr-6 text-[#0a1128] dark:text-[#f1f5f9] placeholder-[#8899a6] dark:placeholder-[#5c6975] focus:outline-none focus:ring-2 focus:ring-[#5b87e5] focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          />
        </div>

        <CollectionDialog />
      </div>
    </header>
  );
}
