import { redirect } from "next/navigation";

export const metadata = {
  title: "AniSocial",
  description: "Comunidade de amantes de animes",
};

export default function Home() {
  redirect("/home");
}
