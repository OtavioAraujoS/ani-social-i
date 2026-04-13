import { redirect } from "next/navigation";

export async function handleUnauthorizedServer() {
  redirect("/login");
}
