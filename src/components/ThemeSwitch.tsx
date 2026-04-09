"use client";
import { Button } from "@/components/ui/button";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitch() {
  const { toggleTheme } = useThemeHook();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer rounded-full bg-transparent border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Mudar tema</span>
    </Button>
  );
}
