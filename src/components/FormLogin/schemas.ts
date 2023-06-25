import * as z from "zod";

export const formLoginSchema = z.object({
  email: z.string().nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória").min(4),
});
