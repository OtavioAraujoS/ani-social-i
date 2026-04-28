import { z } from "zod";

export const CreateTopicSchema = z.object({
  title: z
    .string()
    .min(1, "Título é obrigatório")
    .min(3, "Título deve ter no mínimo 3 caracteres")
    .max(255, "Título deve ter no máximo 255 caracteres"),
  description: z
    .string()
    .min(1, "Descrição é obrigatória")
    .min(10, "Descrição deve ter no mínimo 10 caracteres")
    .max(5000, "Descrição deve ter no máximo 5000 caracteres"),
  animeId: z.uuid("O Anime deve ser válido"),
});

export type CreateTopic = z.infer<typeof CreateTopicSchema>;

export const TopicDefaultValues: CreateTopic = {
  title: "",
  description: "",
  animeId: "",
};
