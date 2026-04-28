"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient, getApiError } from "@/services/apiClient";
import { CollectionFields } from "./CollectionFields";
import {
  CollectionDefaultValues,
  CreateAnimeSchema,
  type CreateAnime,
} from "./CollectionSchema";
import { toast } from "sonner";
import { AlertError } from "../Alert";
import { UpdateAnime } from "@/services/api";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import { useRouter } from "next/navigation";

interface CollectionFormProps {
  initialData?: CreateAnime;
  isEditing?: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export function CollectionForm({
  initialData,
  isEditing = false,
  isLoading,
  setIsLoading,
}: CollectionFormProps) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(CreateAnimeSchema),
    defaultValues: initialData || CollectionDefaultValues,
  });
  const { handleSubmit } = form;

  async function removeAnime() {
    setIsLoading(true);
    try {
      if (!initialData?.id) return;
      const response = await apiClient.social.deleteSocialAnimesByAnimeId(
        initialData?.id,
      );
      if (response.data.success) {
        toast.success("Anime removido com sucesso!");
        await LoadingAndRefresh(router);
        const closeButton = document.querySelector(
          '[data-slot="dialog-close"]',
        ) as HTMLButtonElement;
        if (closeButton) closeButton.click();
      }
    } catch (error) {
      const apiError = getApiError(error);
      AlertError(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data: CreateAnime | UpdateAnime) {
    setIsLoading(true);
    try {
      if (isEditing && initialData?.id) {
        const response = await apiClient.social.patchSocialAnimes({
          animeId: initialData.id,
          title: data.title,
          description: data.description,
          episodes: data.episodes,
          stars: data.stars,
          status: data.status,
          review: data.review,
        });
        if (response.data.success) {
          toast.success("Anime atualizado com sucesso!");
          const closeButton = document.querySelector(
            '[data-slot="dialog-close"]',
          ) as HTMLButtonElement;
          if (closeButton) closeButton.click();
          LoadingAndRefresh(router);
        }
      } else {
        const response = await apiClient.social.postSocialAnimes(
          data as CreateAnime,
        );
        if (response.data.success) {
          toast.success("Anime registrado com sucesso!");
          const closeButton = document.querySelector(
            '[data-slot="dialog-close"]',
          ) as HTMLButtonElement;
          if (closeButton) closeButton.click();
          LoadingAndRefresh(router);
        }
      }
    } catch (error) {
      const apiError = getApiError(error);
      AlertError(apiError);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CollectionFields
        form={form}
        isLoading={isLoading}
        isEditing={isEditing}
        removeAnime={removeAnime}
      />
    </form>
  );
}
