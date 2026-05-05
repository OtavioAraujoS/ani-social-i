"use client";

import { IAnime } from "@/interfaces/IAnime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiClient, getApiError } from "@/services/apiClient";
import { toast } from "sonner";
import { AlertError } from "../Alert";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import { useRouter } from "next/navigation";

import { ImageUpdateField } from "../ImageFields";

const updateImageSchema = z.object({
  imageUrl: z.string().url("Por favor, insira uma URL válida"),
});

type UpdateImageSchema = z.infer<typeof updateImageSchema>;

export function CollectionAnimeImageEdit({
  anime,
  isLoading,
  setIsLoading,
}: {
  anime: IAnime;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
}) {
  const router = useRouter();
  const form = useForm<UpdateImageSchema>({
    resolver: zodResolver(updateImageSchema),
    defaultValues: {
      imageUrl: "",
    },
  });

  const onSubmit = async (data: UpdateImageSchema) => {
    try {
      setIsLoading?.(true);
      await apiClient.animes.patchAnimesAnimesImage({
        animeId: anime.id,
        imageUrl: data.imageUrl,
      });
      toast.success("Imagem atualizada com sucesso!");
      await LoadingAndRefresh(router);

      const closeButton = document.querySelector(
        '[data-slot="dialog-close"]',
      ) as HTMLButtonElement;
      if (closeButton) closeButton.click();
    } catch (error) {
      const apiError = getApiError(error);
      AlertError(apiError);
    } finally {
      setIsLoading?.(false);
    }
  };

  return (
    <ImageUpdateField
      form={form}
      fieldName="imageUrl"
      label="Imagem do Anime"
      currentImage={anime.imageUrl}
      isLoading={isLoading}
      onSubmit={onSubmit}
    />
  );
}
