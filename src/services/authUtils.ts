import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function handleUnauthorizedServer() {
  const cookieStore = await cookies();
  cookieStore.delete("ani-social-token");
  redirect("/login");
}
