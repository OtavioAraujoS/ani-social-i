"use client";

import Image from "next/image";
import { IAnime } from "@/interfaces/IAnime";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiClient, getApiError } from "@/services/apiClient";
import { Image as ImageIcon, Link as LinkIcon, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { AlertError } from "../Alert";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import { useRouter } from "next/navigation";

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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UpdateImageSchema>({
    resolver: zodResolver(updateImageSchema),
    defaultValues: {
      imageUrl: "",
    },
  });
  const currentImageUrl = useWatch({
    control,
    name: "imageUrl",
  });

  const isValidUrl = (url?: string | null) => {
    if (!url) return false;
    return url.startsWith("http") || url.startsWith("/");
  };

  const previewUrl = isValidUrl(currentImageUrl)
    ? currentImageUrl!
    : isValidUrl(anime.imageUrl)
      ? anime.imageUrl!
      : "/notFoundPicture.png";

  const onSubmit = async (data: UpdateImageSchema) => {
    try {
      setIsLoading?.(true);
      await apiClient.social.patchSocialAnimesImage({
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
    <div className="flex flex-col h-fit bg-slate-50 border border-slate-400 dark:bg-[#0c0e0f]/50 dark:border-[#1e2124] rounded-xl p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-1.5 bg-[#2051ce]/10 rounded-md">
          <ImageIcon className="w-4 h-4 text-[#2051ce]" />
        </div>
        <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-900 dark:text-[#f8f9fa]">
          Imagem do Anime
        </h3>
      </div>

      <div className="relative aspect-3/4 w-full max-w-[320px] mx-auto rounded-lg overflow-hidden border border-[#1e2124] mb-8 group bg-[#08090a]">
        <Image
          src={previewUrl}
          alt={anime.title}
          fill
          className="object-cover"
          loading="lazy"
        />

        <div className="absolute top-4 left-4 space-y-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0c0e0f]/80 backdrop-blur-md border border-[#2051ce]/30 rounded-md w-fit">
            <div
              className={`w-2 h-2 rounded-full ${
                previewUrl === anime.imageUrl ? "bg-[#2051ce]" : "bg-yellow-500"
              } animate-pulse`}
            />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
              {previewUrl === anime.imageUrl ? "Imagem Atual" : "Nova Imagem"}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-[0.15em] text-black dark:text-[#747685] ml-1">
            URL da Imagem
          </Label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-black dark:text-[#747685] group-focus-within:text-[#2051ce] transition-colors">
              <LinkIcon className="w-4 h-4" />
            </div>
            <Input
              {...register("imageUrl")}
              placeholder="https://image-source.com/asset.jpg"
              className="pl-10 dark:bg-[#08090a] border-[#1e2124] focus:border-[#2051ce]/50 focus:ring-[#2051ce]/20 h-12 text-sm"
            />
          </div>
          {errors.imageUrl && (
            <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">
              {errors.imageUrl.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || isLoading || !isValidUrl(currentImageUrl)}
          className="cursor-pointer w-full h-12 bg-[#2051ce] hover:bg-[#1a44ae] text-white font-black text-xs uppercase tracking-[0.2em] gap-2 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          Atualizar Imagem
        </Button>
      </form>
    </div>
  );
}
