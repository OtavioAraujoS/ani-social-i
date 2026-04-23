import { PlusCircle } from "lucide-react";

export function RegisterButton({ title }: { title: string }) {
  return (
    <button className="cursor-pointer flex items-center gap-2 bg-linear-to-r from-[#5273a4] to-[#1c3d74] dark:from-[#1c61d8] dark:to-[#113074] hover:opacity-90 transition-opacity text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 shrink-0 w-full md:w-auto justify-center">
      <PlusCircle className="w-5 h-5 text-white/90" />
      {title}
    </button>
  );
}
