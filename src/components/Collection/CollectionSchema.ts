import { z } from "zod";

export const CreateAnimeSchema = z.object({
  id: z.string().optional(),
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
  episodes: z
    .number()
    .int("Episódios deve ser um número inteiro")
    .min(0, "Episódios não pode ser negativo")
    .max(10000, "Episódios deve ser menor que 10000"),
  review: z
    .string()
    .max(1000, "Review deve ter no máximo 1000 caracteres")
    .optional()
    .or(z.literal("")),
  stars: z
    .number()
    .int("Estrelas deve ser um número inteiro")
    .min(1, "Mínimo 1 estrela")
    .max(5, "Máximo 5 estrelas"),
  imageUrl: z.string().optional().or(z.literal("")),
  status: z.enum(["COMPLETED", "RELEASING", "PENDING"]),
});

export type CreateAnime = z.infer<typeof CreateAnimeSchema>;

export const CollectionDefaultValues: CreateAnime = {
  title: "",
  description: "",
  episodes: 0,
  review: "",
  stars: 5,
  imageUrl: "",
  status: "PENDING",
};
