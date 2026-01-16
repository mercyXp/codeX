const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type ApiError = {
  detail: string;
};

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error: ApiError = await res.json();
    throw new Error(error.detail || "Request failed");
  }

  return res.json();
}
