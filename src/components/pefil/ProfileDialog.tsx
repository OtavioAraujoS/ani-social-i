"use client";
import { useState } from "react";
import { StyledDialog } from "../StyledDialog";
import { ProfileForm } from "./ProfileForm";
import { IProfileUserInfos } from "@/interfaces/IProfile";

export function ProfileDialog({
  profileInfos,
}: {
  profileInfos: IProfileUserInfos;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StyledDialog
      title="Modulo de Perfil"
      description="Atualizar"
      descriptionReason="Perfil"
      childrenButton={
        <button className="w-full lg:w-fit max-h-32 self-center cursor-pointer text-white bg-blue-primary hover:bg-blue-accent dark:bg-blue-accent dark:hover:bg-blue-primary px-8 py-3 glass-panel transition-all font-bold tracking-widest text-[10px] inner-glow">
          EDITAR PERFIL
        </button>
      }
    >
      <ProfileForm
        initialData={{
          userId: profileInfos.id,
          name: profileInfos.name,
          userName: profileInfos.username,
          avatarUrl: profileInfos.avatarUrl,
        }}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </StyledDialog>
  );
}
