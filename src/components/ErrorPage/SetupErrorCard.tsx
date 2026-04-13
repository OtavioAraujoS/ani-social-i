"use client";
import { useState, useEffect } from "react";
import { MonoText } from "@/components/MonoText";
import { Compass, Circle } from "lucide-react";

interface SetupErrorCardProps {
  title?: string;
  subtitle?: string;
  integrityLabel?: string;
  integrityValue?: number;
  fragment?: string;
  tasks?: Array<{ label: string; active?: boolean }>;
  quote?: string;
}

export function SetupErrorCard({
  title = "ATIVANDO REPAROS",
  subtitle = "STATUS ATUAL",
  integrityLabel = "INTEGRIDADE",
  fragment,
  tasks = [
    { label: "Sincronizando Arquivos", active: true },
    { label: "Restaurando Fragmentos", active: false },
  ],
  quote = "A ferida é o lugar onde a luz entra em você.",
}: SetupErrorCardProps) {
  const [currentIntegrity, setCurrentIntegrity] = useState(20);

  useEffect(() => {
    if (currentIntegrity >= 100) return;

    const randomDelay = Math.random() * 1200 + 800;

    const timer = setTimeout(() => {
      const increment = Math.floor(Math.random() * 5) + 1;
      setCurrentIntegrity((prev) => Math.min(prev + increment, 100));
    }, randomDelay);

    return () => clearTimeout(timer);
  }, [currentIntegrity]);
  return (
    <div className="relative z-10 w-full max-w-lg lg:max-w-sm">
      <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-sm shadow-2xl overflow-hidden relative group">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        <div className="flex items-start justify-between mb-8 md:mb-12">
          <div className="w-10 h-10 border border-[#2051ce]/40 flex items-center justify-center">
            <Compass className="w-5 h-5 text-[#2051ce]" />
          </div>
          <div className="text-right">
            <MonoText className="text-[9px] text-white/40 uppercase tracking-widest mb-1">
              {subtitle}
            </MonoText>
            <div className="text-xs font-black text-white uppercase tracking-widest">
              {title}
            </div>
          </div>
        </div>

        {fragment && (
          <div className="mb-10 bg-white/2 border border-white/5 p-4 rounded-sm">
            <MonoText className="text-[10px] text-[#d4af37] font-bold tracking-widest uppercase mb-2">
              Erro
            </MonoText>
            <p className="text-white/80 text-xs font-medium leading-relaxed font-mono wrap-break-word">
              {fragment}
            </p>
          </div>
        )}

        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          <div>
            <div className="flex justify-between text-[10px] items-end mb-3 font-bold tracking-widest">
              <MonoText className="text-white/40 uppercase">
                {integrityLabel}
              </MonoText>
              <MonoText className="text-[#2051ce]">
                {currentIntegrity}%
              </MonoText>
            </div>
            <div className="h-0.75 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-[#2051ce] to-[#112d7a] rounded-full shadow-[0_0_10px_rgba(32,81,206,0.6)] transition-all duration-1000"
                style={{ width: `${currentIntegrity}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 ${!task.active ? "opacity-30" : ""}`}
              >
                {task.active ? (
                  <div className="w-2 h-2 rounded-full bg-[#2051ce] shadow-[0_0_8px_rgba(32,81,206,0.8)]" />
                ) : (
                  <Circle className="w-2 h-2 text-white/40" />
                )}
                <MonoText className="text-[10px] text-white font-bold tracking-widest uppercase">
                  {task.label}
                </MonoText>
              </div>
            ))}
          </div>
        </div>

        {quote && (
          <div className="pt-6 md:pt-8 border-t border-white/5 italic">
            <div className="text-[10px] text-white/40 leading-relaxed text-center">
              &quot;{quote}&quot;
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
