"use client";

import { useForm } from "react-hook-form";
import { ImageUpdateField } from "../ImageFields";

import { UpdateUserAvatar } from "@/services/api";

interface ProfilePictureFieldProps {
  currentAvatar?: string | null;
  isLoading: boolean;
  onSubmit: (data: UpdateUserAvatar) => Promise<void>;
}

export function ProfilePictureField({
  currentAvatar,
  isLoading,
  onSubmit,
}: ProfilePictureFieldProps) {
  const form = useForm<UpdateUserAvatar>({
    defaultValues: {
      imageBase64Path: "",
    },
  });
  return (
    <div className="mb-8">
      <ImageUpdateField
        form={form}
        fieldName="imageBase64Path"
        label="Foto de Perfil"
        currentImage={currentAvatar}
        isLoading={isLoading}
        onSubmit={onSubmit}
        aspectRatio="aspect-square"
        buttonLabel="Atualizar Avatar"
      />
    </div>
  );
}
