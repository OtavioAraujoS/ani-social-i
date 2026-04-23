"use function";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationFooterProps {
  collectionLength: number;
  currentPage: number;
  limit: number;
}

export function PaginationFooter({
  collectionLength,
  currentPage,
  limit,
}: PaginationFooterProps) {
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

  const startEntry = collectionLength === 0 ? 0 : (currentPage - 1) * limit + 1;
  const endEntry = Math.min(currentPage * limit, collectionLength);

  const getPageTokens = (): (number | "ellipsis-left" | "ellipsis-right")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const tokens: (number | "ellipsis-left" | "ellipsis-right")[] = [];
    tokens.push(1, 2);

    const windowStart = Math.max(3, currentPage - 1);
    const windowEnd = Math.min(totalPages - 1, currentPage + 1);

    if (windowStart > 3) {
      tokens.push("ellipsis-left");
    }

    for (let p = windowStart; p <= windowEnd; p++) {
      tokens.push(p);
    }

    if (windowEnd < totalPages - 1) {
      tokens.push("ellipsis-right");
    }

    tokens.push(totalPages);
    return tokens.filter((t, i, arr) => arr.indexOf(t) === i);
  };

  return (
    <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4 p-4 px-6 bg-white border border-[#eaedf1] rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:bg-[#1a1c1e] dark:border-[#2d3135] dark:shadow-none transition-colors">
      <p className="text-[#8899a6] dark:text-[#94a3b8] text-sm font-medium">
        Exibindo {startEntry} a {endEntry} de {collectionLength} entradas
      </p>

      <div className="flex items-center gap-1">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#2d3135] text-[#8899a6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {getPageTokens().map((token) =>
          token === "ellipsis-left" || token === "ellipsis-right" ? (
            <span
              key={token}
              className="w-8 h-8 flex items-center justify-center text-[#8899a6] dark:text-[#94a3b8] text-sm select-none"
            >
              …
            </span>
          ) : (
            <button
              key={token}
              onClick={() => handlePageChange(token)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-medium text-sm transition-colors ${
                currentPage === token
                  ? "bg-[#5182ed] text-white shadow-sm"
                  : "bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#2d3135] text-[#8899a6] dark:text-[#94a3b8] cursor-pointer"
              }`}
            >
              {token}
            </button>
          ),
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#2d3135] text-[#8899a6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
