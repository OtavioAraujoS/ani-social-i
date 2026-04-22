import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CollectionForm } from "./CollectionForm";
import { DialogTitleStyled } from "../DialogTitleStyled";

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
        <DialogTitleStyled
          title="Modulo de Anime"
          description="Registrar / Editar"
          descriptionReason="Anime"
        >
          <CollectionForm />
        </DialogTitleStyled>
      </DialogContent>
    </Dialog>
  );
}
