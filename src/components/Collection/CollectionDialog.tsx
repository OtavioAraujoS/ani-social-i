"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CollectionForm } from "./CollectionForm";
import { DialogTitleStyled } from "../DialogTitleStyled";
import { useState } from "react";
import { RegisterButton } from "../RegisterButton";

export function CollectionDialog() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <RegisterButton title="Cadastrar anime" />
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
