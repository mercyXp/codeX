import { apiRequest } from "./api";

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  country?: string;
  password: string;
  confirm_password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
}

export async function registerUser(payload: RegisterPayload) {
  const data = await apiRequest<TokenResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  localStorage.setItem("codex_token", data.access_token);
  return data;
}

export async function loginUser(payload: LoginPayload) {
  const data = await apiRequest<TokenResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  localStorage.setItem("codex_token", data.access_token);
  return data;
}

export function logoutUser() {
  localStorage.removeItem("codex_token");
}

export function getToken(): string | null {
  return typeof window !== "undefined"
    ? localStorage.getItem("codex_token")
    : null;
}
