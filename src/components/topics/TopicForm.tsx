import { CreateTopic, UpdateTopic } from "@/services/api";
import { apiClient, getApiError } from "@/services/apiClient";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AlertError } from "../Alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTopicSchema, TopicDefaultValues } from "./TopicSchema";
import { TopicFields } from "./TopicFields";
import { motion } from "motion/react";
import { IAnime } from "@/interfaces/IAnime";

interface TopicFormProps {
  initialData?: CreateTopic;
  topicId?: string;
  isEditing?: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  animes: IAnime[];
}

export function TopicForm({
  initialData,
  topicId,
  isEditing,
  isLoading,
  setIsLoading,
  animes,
}: TopicFormProps) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(CreateTopicSchema),
    defaultValues: initialData || TopicDefaultValues,
  });
  const { handleSubmit } = form;

  async function removeTopic() {
    setIsLoading(true);
    try {
      if (!topicId) return;
      const response =
        await apiClient.topics.deleteTopicsTopicsByTopicId(topicId);
      if (response.data.success) {
        toast.success("Tópico removido com sucesso!");
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

  async function onSubmit(data: CreateTopic | UpdateTopic) {
    setIsLoading(true);
    try {
      if (isEditing && topicId) {
        const response = await apiClient.topics.patchTopicsTopicsByTopicId(
          topicId,
          {
            ...data,
            topicId: topicId,
          },
        );
        if (response.data.success) {
          toast.success("Tópico atualizado com sucesso!");
          const closeButton = document.querySelector(
            '[data-slot="dialog-close"]',
          ) as HTMLButtonElement;
          if (closeButton) closeButton.click();
          return LoadingAndRefresh(router);
        }
      }

      const response = await apiClient.topics.postTopicsTopics(
        data as CreateTopic,
      );
      if (response.data.success) {
        toast.success("Tópico registrado com sucesso!");
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TopicFields
          form={form}
          isLoading={isLoading}
          isEditing={isEditing}
          removeTopic={removeTopic}
          animes={animes}
        />
      </form>
    </motion.div>
  );
}
