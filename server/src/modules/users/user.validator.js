import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .minlength(4, "Password should be greater then 4 charecters"),
  age: z.number().min(18),
  role: z.enum(["ADMIN", "DRIVER", "OWNER", "USER"]).default("USER"),
});

export const validateRegistrationDetails = (req, res, next) => {
  try {
    const user = userSchema.parse(req.body);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
