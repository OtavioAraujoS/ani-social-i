import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CollectionForm } from "./CollectionForm";

export function CollectionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer flex items-center gap-2 bg-linear-to-r from-[#8bb4f9] to-[#5182ed] dark:from-[#1c61d8] dark:to-[#031e58] hover:opacity-90 transition-opacity text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 shrink-0 w-full md:w-auto justify-center">
          <PlusCircle className="w-5 h-5 text-white/90" />
          Registrar novo anime
        </button>
      </DialogTrigger>
      <DialogContent className="md:max-w-7xl w-[calc(100%-2rem)] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Cadastrar Anime</DialogTitle>
        <main className="flex-1 flex flex-col z-10 min-h-0">
          <div className="flex-1 px-12 py-8 overflow-y-auto min-h-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-primary/30 dark:bg-primary/50"></div>
              <span className="sanctuary-label text-primary dark:text-slate-300">
                Modulo de Anime
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mb-6 text-3xl md:text-6xl font-black text-indigo-900 dark:text-slate-100 tracking-tighter leading-[0.9]">
              <span>Registrar / Editar</span>
              <span className="text-primary dark:text-blue-400">Anime</span>
            </div>
            <CollectionForm />
          </div>
        </main>
      </DialogContent>
    </Dialog>
  );
}
