import { LoginDTO } from "@/schemas/dto/login.dto";

interface LoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export const loginUser = async (credentials: LoginDTO): Promise<LoginResponse> => {
    try {
        const response = await fetch("https://your-api.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Login failed");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Auth service error:", error);
        throw error;
    }
};