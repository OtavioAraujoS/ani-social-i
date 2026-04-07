import { Button } from "@/components/ui/button";
import { projectLinks } from "@/utils/projectLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ani Social",
  description: "Social Network for Anime Lovers",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-white relative overflow-hidden font-sans selection:bg-[#00F0FF]/30">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <header className="relative z-50 w-full px-12 py-8 flex flex-col md:flex-row justify-between items-center bg-[#0A0E14]/40 backdrop-blur-md">
        <div className="text-[#00F0FF] text-3xl font-black tracking-tighter mb-6 md:mb-0 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
          AniSocial
        </div>

        <nav className="flex items-center gap-4 text-[#00F0FF]/60 text-[10px] sm:text-xs tracking-[0.3em] font-mono uppercase">
          {projectLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-[#00F0FF] transition-colors px-2"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <Button className="cursor-pointer mt-6 md:mt-0 bg-transparent border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/10 rounded-full px-10 py-6 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all backdrop-blur-md uppercase text-[10px] font-black tracking-[0.2em]">
          Entrar / Cadastrar
        </Button>
      </header>
      {children}
    </div>
  );
}
