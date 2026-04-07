"use client";

import { Button } from "@/components/ui/button";
import { projectLinks } from "@/utils/projectLinks";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white relative overflow-hidden font-sans selection:bg-[#00F0FF]/30">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <header className="relative z-50 w-full px-6 sm:px-12 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center bg-[#0A0E14]/40 backdrop-blur-md gap-6 md:gap-0">
        <Link href="/home">
          <div className="text-[#00F0FF] text-2xl md:text-3xl font-black tracking-tighter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            AniSocial
          </div>
        </Link>

        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[#00F0FF]/60 text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.3em] font-mono uppercase">
          {projectLinks.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <Link
                href={item.link}
                className="hover:text-[#00F0FF] transition-colors px-2"
              >
                {item.title}
              </Link>
              {index < projectLinks.length - 1 && (
                <span className="opacity-20">|</span>
              )}
            </div>
          ))}
        </nav>

        {isAuthenticated ? (
          <Button
            onClick={logout}
            className="cursor-pointer bg-transparent border border-[#FF4E4E]/40 text-[#FF4E4E] hover:bg-[#FF4E4E]/10 rounded-full px-6 md:px-10 py-4 md:py-6 shadow-[0_0_20px_rgba(255,78,78,0.1)] hover:shadow-[0_0_30px_rgba(255,78,78,0.3)] transition-all backdrop-blur-md uppercase text-[10px] font-black tracking-[0.2em]"
          >
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button
              asChild
              className="cursor-pointer bg-transparent border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/10 rounded-full px-6 md:px-10 py-4 md:py-6 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all backdrop-blur-md uppercase text-[10px] font-black tracking-[0.2em]"
            >
              <span>Join the Hub / Login</span>
            </Button>
          </Link>
        )}
      </header>
      {children}
    </div>
  );
}
