import * as z from "zod";

export const formRegisterSchema = z.object({
  email: z.string().nonempty("O email é obrigatório"),
  name: z.string().nonempty("O nome é obrigatório"),
  password: z
    .string()
    .nonempty("A senha é obrigatória, deve ter no mínimo 4 digitos")
    .min(4),
  phone: z.string().nonempty("O número de telefone é obrigatório"),
});
