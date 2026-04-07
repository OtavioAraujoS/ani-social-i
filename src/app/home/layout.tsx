"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { projectLinks } from "@/utils/projectLinks";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { Moon, Sun } from "lucide-react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex-1 w-full flex flex-col overflow-x-hidden bg-[url('/bgWhite.png')] dark:bg-[url('/bgDark.png')] bg-cover bg-center bg-no-repeat bg-fixed text-slate-900 dark:text-white relative font-sans selection:bg-[#00F0FF]/30 transition-colors duration-300">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <header className="relative z-50 w-full px-6 sm:px-12 py-6 md:py-5 flex flex-col md:flex-row justify-between items-center bg-white/60 dark:bg-[#0A0E14]/40 backdrop-blur-md gap-6 md:gap-0">
        <Link href="/home">
          <div className="text-slate-900 dark:text-[#00F0FF] text-2xl md:text-3xl font-black tracking-tighter drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-colors">
            AniSocial
          </div>
        </Link>

        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-slate-700 dark:text-[#00F0FF]/60 text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.3em] font-mono uppercase lg:text-[0.9rem] font-semibold dark:font-normal">
          {projectLinks.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <Link
                href={item.link}
                className="hover:text-blue-600 dark:hover:text-[#00F0FF] transition-colors px-2"
              >
                {item.title}
              </Link>
              {index < projectLinks.length - 1 && (
                <span className="opacity-20 text-slate-500 dark:text-inherit">
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-transparent border border-slate-300 dark:border-[#00F0FF]/40 text-slate-700 dark:text-[#00F0FF] hover:bg-slate-200 dark:hover:bg-[#00F0FF]/10"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Mudar tema</span>
          </Button>

          {isAuthenticated ? (
            <Button
              onClick={logout}
              className="cursor-pointer bg-red-500 text-white border-transparent hover:bg-red-600 dark:bg-transparent dark:border dark:border-[#FF4E4E]/40 dark:text-[#FF4E4E] dark:hover:bg-[#FF4E4E]/10 rounded-full px-6 md:px-10 py-4 md:py-6 shadow-md dark:shadow-[0_0_20px_rgba(255,78,78,0.1)] transition-all backdrop-blur-md uppercase text-[10px] font-black tracking-[0.2em]"
            >
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button
                asChild
                className="cursor-pointer bg-[#2051ce] text-white border-transparent hover:bg-blue-700 dark:bg-transparent dark:border dark:border-[#00F0FF]/40 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/10 rounded-full px-6 md:px-10 py-4 md:py-6 shadow-md shadow-blue-500/30 dark:shadow-[0_0_20px_rgba(0,240,255,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all backdrop-blur-md uppercase text-[10px] font-black tracking-[0.2em]"
              >
                <span>Join the Hub / Login</span>
              </Button>
            </Link>
          )}
        </div>
      </header>

      {children}
    </div>
  );
}
