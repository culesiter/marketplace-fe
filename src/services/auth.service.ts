// Auth service - handles authentication API calls
import { apiClient } from "@/lib/api-client";
import type { User } from "@/types";

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  login: (payload: LoginPayload) =>
    apiClient<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  register: (payload: LoginPayload & { name: string }) =>
    apiClient<AuthResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  logout: () =>
    apiClient<void>("/auth/logout", { method: "POST" }),
};
