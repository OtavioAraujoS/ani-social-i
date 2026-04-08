"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function useThemeHook() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    theme: mounted ? theme : undefined,
    resolvedTheme: mounted ? resolvedTheme : undefined,
    setTheme,
    toggleTheme,
    isDark: mounted ? resolvedTheme === "dark" : false,
    isLight: mounted ? resolvedTheme === "light" : false,
    mounted,
  };
}
