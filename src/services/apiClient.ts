import { Api } from "./api";

export const apiClient = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
});
