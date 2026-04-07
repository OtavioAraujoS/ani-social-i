const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  get: async (endpoint: string, options: RequestInit = {}) => {
    let token = "";
    if (typeof window !== "undefined") {
      token =
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("ani-social-token="))
          ?.split("=")[1] || "";
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options?.headers,
      },
    });

    if (response.status === 401 && typeof window !== "undefined") {
      window.location.href = "/login";
    }

    return response.json();
  },

  post: async (endpoint: string, data: unknown, options: RequestInit = {}) => {
    return api.get(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    });
  },

  patch: async (endpoint: string, data: unknown, options: RequestInit = {}) => {
    return api.get(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
      ...options,
    });
  },

  delete: async (endpoint: string, options: RequestInit = {}) => {
    return api.get(endpoint, {
      method: "DELETE",
      ...options,
    });
  },
};
