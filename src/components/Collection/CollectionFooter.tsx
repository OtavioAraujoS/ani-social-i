"use function";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CollectionFooterProps {
  collectionLength: number;
  currentPage: number;
  limit: number;
}

export function CollectionFooter({
  collectionLength,
  currentPage,
  limit,
}: CollectionFooterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const totalPages = Math.max(1, Math.ceil(collectionLength / limit));

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startEntry = collectionLength === 0 ? 0 : (currentPage - 1) * limit + 1;
  const endEntry = Math.min(currentPage * limit, collectionLength);
  return (
    <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4 p-4 px-6 bg-white border border-[#eaedf1] rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:bg-[#1a1c1e] dark:border-[#2d3135] dark:shadow-none transition-colors">
      <p className="text-[#8899a6] dark:text-[#94a3b8] text-sm font-medium">
        Exibindo {startEntry} a {endEntry} de {collectionLength} entradas
      </p>

      <div className="flex items-center gap-1">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#2d3135] text-[#8899a6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg font-medium text-sm transition-colors ${
              currentPage === page
                ? "bg-[#5182ed] text-white shadow-sm"
                : "bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#2d3135] text-[#8899a6] dark:text-[#94a3b8]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#2d3135] text-[#8899a6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
