import { z } from "zod";

export const UpdateUserSchema = z.object({
  userId: z.string().optional(),
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(255, "Nome deve ter no máximo 255 caracteres"),
  userName: z
    .string()
    .min(1, "Nome de usuário é obrigatória")
    .min(3, "Nome de usuário deve ter no mínimo 3 caracteres")
    .max(30, "Nome de usuário deve ter no máximo 30 caracteres"),
});

export type UpdateUser = z.infer<typeof UpdateUserSchema>;

export const UpdateUserDefaultValues: UpdateUser = {
  name: "",
  userName: "",
  userId: "",
};
