"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogTitleStyled } from "../DialogTitleStyled";
import { useState } from "react";
import { RegisterButton } from "../RegisterButton";
import { TopicForm } from "./TopicForm";
import { IAnime } from "@/interfaces/IAnime";

export function TopicDialog({ animes }: { animes: IAnime[] }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <RegisterButton title="Cadastrar Tópico" />
      </DialogTrigger>
      <DialogContent className="md:max-w-7xl w-[calc(100%-2rem)] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Cadastrar Tópico</DialogTitle>
        <DialogDescription className="sr-only">
          Cadastrar Tópico
        </DialogDescription>
        <DialogTitleStyled
          title="Modulo de Tópico"
          description="Registrar"
          descriptionReason="Tópico"
        >
          <TopicForm
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            animes={animes}
          />
        </DialogTitleStyled>
      </DialogContent>
    </Dialog>
  );
}
