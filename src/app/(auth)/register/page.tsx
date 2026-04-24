import { RegisterHero } from "@/components/auth/RegisterHero";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Registro - AniSocial",
  description:
    "Registre-se no AniSocial e faça parte da comunidade de amantes de animes.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-dvh md:min-h-screen flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-[#0c0e0f] text-[#f8f9fa] selection:bg-[#416be8]/30">
      <RegisterHero />
      <RegisterForm />

      <div className="fixed top-0 right-0 w-64 h-64 bg-[#2051ce]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#5a3fd8]/5 blur-[150px] rounded-full pointer-events-none"></div>
    </main>
  );
}
