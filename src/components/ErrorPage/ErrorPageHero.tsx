"use client";

import React from "react";
import { MonoText } from "@/components/MonoText";

interface Action {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  primary?: boolean;
}

interface ErrorPageHeroProps {
  errorCode?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  actions: Action[];
}

export function ErrorPageHero({
  errorCode = "500",
  titleLine1,
  titleLine2,
  description,
  actions,
}: ErrorPageHeroProps) {
  return (
    <div className="relative z-10 max-w-xl text-left w-full">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-8 h-px bg-[#2051ce]" />
        <MonoText className="text-[10px] text-[#2051ce] font-bold tracking-widest uppercase">
          ERROR CODE {errorCode}
        </MonoText>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6 md:mb-12">
        <span className="block text-white">{titleLine1}</span>
        <span className="block bg-linear-to-r from-[#d4af37] via-[#f8e7b0] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          {titleLine2}
        </span>
      </h1>

      <p className="text-[#e2e2e9]/60 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md font-medium italic">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className={`
              cursor-pointer px-8 py-4 rounded-sm flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-widest transition-all
              ${
                action.primary
                  ? "bg-[#2051ce] hover:bg-[#1a41a3] text-white shadow-lg shadow-[#2051ce]/20"
                  : "border border-white/10 hover:bg-white/5 text-white"
              }
            `}
          >
            {action.label} {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
