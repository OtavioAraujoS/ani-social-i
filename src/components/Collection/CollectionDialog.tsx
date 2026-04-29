"use client";
import { CollectionForm } from "./CollectionForm";
import { useState } from "react";
import { RegisterButton } from "../RegisterButton";
import { StyledDialog } from "../StyledDialog";

export function CollectionDialog() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StyledDialog
      title="Modulo de Anime"
      description="Registrar"
      descriptionReason="Anime"
      childrenButton={<RegisterButton title="Cadastrar anime" />}
    >
      <CollectionForm isLoading={isLoading} setIsLoading={setIsLoading} />
    </StyledDialog>
  );
}
