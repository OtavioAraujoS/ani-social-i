"use client";
import { useState } from "react";
import { TopicForm } from "./TopicForm";
import { IAnime } from "@/interfaces/IAnime";
import { StyledDialog } from "../StyledDialog";
import { RegisterButton } from "../RegisterButton";

export function TopicDialog({ animes }: { animes: IAnime[] }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StyledDialog
      title="Modulo de Tópico"
      description="Registrar"
      descriptionReason="Tópico"
      childrenButton={<RegisterButton title="Cadastrar Tópico" />}
    >
      <TopicForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        animes={animes}
      />
    </StyledDialog>
  );
}
