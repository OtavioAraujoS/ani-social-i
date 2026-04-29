"use client";
import { CollectionForm } from "./CollectionForm";
import { IAnime } from "@/interfaces/IAnime";
import { CollectionAnimeImageEdit } from "./CollectionAnimeImageEdit";
import { useState } from "react";
import { StyledDialog } from "../StyledDialog";

interface CollectionDialogEditProps {
  anime: IAnime;
  children: React.ReactNode;
}

export function CollectionDialogEdit({
  anime,
  children,
}: CollectionDialogEditProps) {
  const [isLoading, setIsLoading] = useState(false);
  const animeForm = {
    id: anime.id,
    title: anime.title,
    description: anime.description ?? "",
    episodes: anime.episodes ?? 0,
    review: anime.review ?? "",
    stars: anime.stars ?? 5,
    status: anime.status ?? "PENDING",
  };
  return (
    <StyledDialog
      title="Modulo de Anime"
      description="Atualizar"
      descriptionReason="Anime"
      childrenButton={children}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 overflow-y-auto px-6">
        <div className="col-span-1 md:col-span-2">
          <CollectionAnimeImageEdit
            anime={anime}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <CollectionForm
            initialData={animeForm}
            isEditing={true}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </StyledDialog>
  );
}
