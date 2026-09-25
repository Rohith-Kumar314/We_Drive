import { z } from "zod";

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string()
});

export const registerSchema = z.object({
  username: z.string(),
  email: z.string().email().toLowerCase(),
  password: z.string().length(4,"Password should be minimum of 4 charecters"),
  confirmPassword:z.string(),
  age: z.number(),
  role: z.enum(["DRIVER", "OWNER", "USER"]).default("USER")
});

export type Ilogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>
