import { z } from "zod";
import { LoginDTO } from "../dto/login.dto";

const LoginSchema = z.object({
    email: z.email("Enter a valid email address"),
    password: z.string().min(6, "Enter at least 6 characters"),
}) satisfies z.ZodType<LoginDTO>;

export { LoginSchema };
