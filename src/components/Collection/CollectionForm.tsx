"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient, getApiError } from "@/services/apiClient";
import { CollectionFields } from "./CollectionFields";
import { CreateAnimeSchema, type CreateAnime } from "./CollectionSchema";
import { toast } from "sonner";
import { AlertError } from "../Alert";

interface CollectionFormProps {
  initialData?: CreateAnime;
  isEditing?: boolean;
}

const DEFAULT_VALUES: CreateAnime = {
  title: "",
  description: "",
  episodes: 0,
  review: "",
  stars: 5,
  imageUrl: "",
  status: "PENDING",
};

export function CollectionForm({
  initialData,
  isEditing = false,
}: CollectionFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(CreateAnimeSchema),
    defaultValues: initialData || DEFAULT_VALUES,
  });

  const { handleSubmit } = form;

  async function onSubmit(data: CreateAnime) {
    setIsLoading(true);
    try {
      if (isEditing && initialData?.id) {
        toast.success("Anime atualizado com sucesso!");
      } else {
        const response = await apiClient.social.postSocialAnimes(data);
        if (response.data.success) {
          toast.success("Anime registrado com sucesso!");
          const closeButton = document.querySelector(
            '[data-slot="dialog-close"]',
          ) as HTMLButtonElement;
          if (closeButton) closeButton.click();
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
      />
    </form>
  );
}
