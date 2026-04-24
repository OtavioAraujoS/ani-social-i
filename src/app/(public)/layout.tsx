"use client";

import { Button } from "@/components/ui/button";
import { projectLinks } from "@/utils/projectLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const wallpaperRoutes = ["/home", "/animes", "/forum"];
  const showWallpaper = wallpaperRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  return (
    <div
      className={cn(
        "h-screen w-full flex flex-col text-slate-900 dark:text-white relative font-sans selection:bg-[#00F0FF]/30 overflow-hidden",
        showWallpaper && "bg-wallpaper",
      )}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 w-full p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl px-6 md:px-12 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pointer-events-auto">
          <Link href="/home" prefetch={false}>
            <div className="text-slate-900 dark:text-white text-xl md:text-2xl font-black tracking-tighter uppercase">
              Ani/Social
            </div>
          </Link>

          <nav className="flex flex-wrap justify-center items-center gap-x-1 text-slate-900/80 dark:text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            {projectLinks.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <Link
                  href={item.link}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-1"
                  prefetch={false}
                >
                  {item.title}
                </Link>
                {index < projectLinks.length - 1 && (
                  <span className="opacity-30 mx-1 font-light">|</span>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeSwitch />

            <Link href="/login" prefetch={false}>
              <Button
                asChild
                className="cursor-pointer rounded-full px-6 py-2 transition-all backdrop-blur-md uppercase text-[10px] font-bold tracking-wider
                  bg-[#2051CE] border-transparent text-white hover:bg-[#1a44ae] shadow-lg shadow-blue-500/20 border
                  dark:bg-[#00F0FF]/5 dark:border-[#00F0FF]/40 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/15 dark:shadow-none dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <span>Login / Registrar</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col pt-56 sm:pt-48 md:pt-32 relative z-10 overflow-y-auto lg:overflow-visible">
        {children}
      </main>
    </div>
  );
}
