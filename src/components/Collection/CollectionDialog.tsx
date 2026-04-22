"use client";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CollectionForm } from "./CollectionForm";
import { DialogTitleStyled } from "../DialogTitleStyled";
import { useState } from "react";

export function CollectionDialog() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer flex items-center gap-2 bg-linear-to-r from-[#5273a4] to-[#1c3d74] dark:from-[#1c61d8] dark:to-[#113074] hover:opacity-90 transition-opacity text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 shrink-0 w-full md:w-auto justify-center">
          <PlusCircle className="w-5 h-5 text-white/90" />
          Registrar novo anime
        </button>
      </DialogTrigger>
      <DialogContent className="md:max-w-7xl w-[calc(100%-2rem)] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Cadastrar Anime</DialogTitle>
        <DialogTitleStyled
          title="Modulo de Anime"
          description="Registrar"
          descriptionReason="Anime"
        >
          <CollectionForm isLoading={isLoading} setIsLoading={setIsLoading} />
        </DialogTitleStyled>
      </DialogContent>
    </Dialog>
  );
}
