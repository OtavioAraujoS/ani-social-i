"use client";

import React from "react";
import { MonoText } from "@/components/MonoText";

interface ErrorContainerProps {
  children: React.ReactNode;
  branding?: string;
}

export function ErrorContainer({
  children,
  branding = "ANI/SOCIAL",
}: ErrorContainerProps) {
  return (
    <div className="fixed inset-0 z-9999 bg-[#0a0e14] font-sans antialiased overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between bg-black/20 backdrop-blur-sm relative z-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-[#00f0ff] flex items-center justify-center">
            <div className="w-2 h-2 bg-[#00f0ff]" />
          </div>
          <MonoText className="text-sm font-bold tracking-[0.2em] text-white">
            {branding}
          </MonoText>
        </div>
      </header>

      <main className="flex-1 relative flex flex-col items-center justify-start lg:justify-center overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
