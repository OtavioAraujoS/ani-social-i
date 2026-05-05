import { apiClient, getApiError } from "@/services/apiClient";
import { AlertError } from "../Alert";
import { toast } from "sonner";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUpdateUser } from "@/interfaces/IUser";
import { ProfileFields } from "./ProfileFields";
import {
  UpdateUser,
  UpdateUserDefaultValues,
  UpdateUserSchema,
} from "./ProfileSchema";
import { UpdateUserAvatar } from "@/services/api";
import { ProfilePictureField } from "./ProfilePictureField";

interface ProfileFormProps {
  initialData?: IUpdateUser;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export function ProfileForm({
  initialData,
  isLoading,
  setIsLoading,
}: ProfileFormProps) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: initialData || UpdateUserDefaultValues,
  });
  const { handleSubmit } = form;

  async function changeUserPicture(data: UpdateUserAvatar) {
    setIsLoading(true);
    try {
      const response = await apiClient.users.patchUsersAvatar({
        userId: initialData?.userId ?? "",
        imageBase64Path: data.imageBase64Path,
      });
      if (response.data.success) {
        toast.success("Foto de perfil atualizada com sucesso!");
        const closeButton = document.querySelector(
          '[data-slot="dialog-close"]',
        ) as HTMLButtonElement;
        if (closeButton) closeButton.click();
        LoadingAndRefresh(router);
      }
    } catch (error) {
      const apiError = getApiError(error);
      AlertError(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data: UpdateUser) {
    setIsLoading(true);
    try {
      const response = await apiClient.users.patchUsers({
        userId: initialData?.userId ?? "",
        name: data.name,
        userName: data.userName,
      });
      if (response.data.success) {
        toast.success("Perfil atualizado com sucesso!");
        const closeButton = document.querySelector(
          '[data-slot="dialog-close"]',
        ) as HTMLButtonElement;
        if (closeButton) closeButton.click();
        LoadingAndRefresh(router);
      }
    } catch (error) {
      const apiError = getApiError(error);
      AlertError(apiError);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-8 w-full items-stretch">
      <ProfilePictureField
        currentAvatar={initialData?.avatarUrl}
        isLoading={isLoading}
        onSubmit={changeUserPicture}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <ProfileFields form={form} isLoading={isLoading} />
      </form>
    </div>
  );
}
