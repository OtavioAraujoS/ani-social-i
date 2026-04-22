"use client";
import { DialogTitleStyled } from "../DialogTitleStyled";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CollectionForm } from "./CollectionForm";
import { IAnime } from "@/interfaces/IAnime";
import { CollectionAnimeImageEdit } from "./CollectionAnimeImageEdit";
import { useState } from "react";

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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-w-7xl w-[calc(100%-2rem)] p-0 overflow-y-auto">
        <DialogTitle className="sr-only">Editar Anime</DialogTitle>
        <DialogTitleStyled
          title="Modulo de Anime"
          description="Editar"
          descriptionReason="Anime"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 overflow-y-auto px-6">
            <div className="col-span-1 md:col-span-3">
              <CollectionForm
                initialData={animeForm}
                isEditing={true}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <CollectionAnimeImageEdit
                anime={anime}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </div>
          </div>
        </DialogTitleStyled>
      </DialogContent>
    </Dialog>
  );
}
