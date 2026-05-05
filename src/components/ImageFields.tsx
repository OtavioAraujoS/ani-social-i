"use client";

import Image from "next/image";
import { FieldValues, useWatch, type UseFormReturn, Path } from "react-hook-form";
import { Image as ImageIcon, Link as LinkIcon, RefreshCw } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface ImageUpdateFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  fieldName: Path<T>;
  label: string;
  currentImage?: string | null;
  isLoading?: boolean;
  onSubmit: (data: T) => void;
  buttonLabel?: string;
  aspectRatio?: string;
}

export function ImageUpdateField<T extends FieldValues>({
  form,
  fieldName,
  label,
  currentImage,
  isLoading,
  onSubmit,
  buttonLabel = "Atualizar Imagem",
  aspectRatio = "aspect-3/4",
}: ImageUpdateFieldProps<T>) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const watchedValue = useWatch({
    control,
    name: fieldName,
  });

  const isValidUrl = (url?: string | null) => {
    if (!url) return false;
    return url.startsWith("http") || url.startsWith("/");
  };

  const previewUrl = isValidUrl(watchedValue)
    ? watchedValue
    : isValidUrl(currentImage)
      ? currentImage!
      : "/notFoundPicture.png";

  return (
    <div className="flex flex-col h-fit bg-slate-50 border border-slate-400 dark:bg-[#0c0e0f]/50 dark:border-[#1e2124] rounded-xl p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-1.5 bg-[#2051ce]/10 rounded-md">
          <ImageIcon className="w-4 h-4 text-[#2051ce]" />
        </div>
        <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-900 dark:text-[#f8f9fa]">
          {label}
        </h3>
      </div>

      <div
        className={`relative ${aspectRatio} w-full max-w-[320px] mx-auto rounded-lg overflow-hidden border border-[#1e2124] mb-8 group bg-[#08090a]`}
      >
        <Image
          src={previewUrl}
          alt={label}
          fill
          className="object-cover"
          loading="lazy"
          unoptimized
        />

        <div className="absolute top-4 left-4 space-y-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0c0e0f]/80 backdrop-blur-md border border-[#2051ce]/30 rounded-md w-fit">
            <div
              className={`w-2 h-2 rounded-full ${
                previewUrl === currentImage ? "bg-[#2051ce]" : "bg-yellow-500"
              } animate-pulse`}
            />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
              {previewUrl === currentImage ? "Imagem Atual" : "Nova Imagem"}
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
              {...register(fieldName)}
              placeholder="https://image-source.com/asset.jpg"
              className="pl-10 dark:bg-[#08090a] border-[#1e2124] focus:border-[#2051ce]/50 focus:ring-[#2051ce]/20 h-12 text-sm"
            />
          </div>
          {errors[fieldName] && (
            <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">
              {errors[fieldName]?.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isLoading || !isValidUrl(watchedValue)}
          className="cursor-pointer w-full h-12 bg-[#2051ce] hover:bg-[#1a44ae] text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-[0.98] rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
