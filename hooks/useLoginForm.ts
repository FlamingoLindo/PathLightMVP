import { LoginDTO } from "@/schemas/dto/login.dto";
import { LoginSchema } from "@/schemas/zod/login.schema";
import { loginUser } from "@/services/auth.service";
import { useState } from "react";

type LoginErrors = Partial<Record<keyof LoginDTO, string>>;

export const useLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<LoginErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const clearError = (field: keyof LoginDTO) => {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const validateForm = (): boolean => {
        const result = LoginSchema.safeParse({ email, password });

        if (result.success) {
            setErrors({});
            return true;
        }

        const newErrors: LoginErrors = {};
        result.error.issues.forEach((issue) => {
            const field = issue.path[0] as keyof LoginDTO;
            if (field && !newErrors[field]) {
                newErrors[field] = issue.message;
            }
        });

        setErrors(newErrors);
        return false;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const result = await loginUser({ email, password });
            console.log("Login successful:", result);
            return result;
        } catch (error) {
            console.error("Login failed:", error);
            setErrors({ email: "Invalid email or password" });
            throw error;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        isSubmitting,
        clearError,
        handleSubmit,
    };
};
