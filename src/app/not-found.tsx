"use client";

import { Home, Compass } from "lucide-react";
import { EditorialBlob } from "@/components/ErrorPage/EditorialBlob";
import { MonoText } from "@/components/MonoText";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF0E0] flex flex-col font-sans antialiased text-[#5C4033] selection:bg-[#F2A34C]/30 overflow-x-hidden relative">
      <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-white/40 blur-[200px] pointer-events-none rounded-full" />

      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="w-full max-w-[16rem] sm:max-w-md md:max-w-lg lg:max-w-2xl">
              <EditorialBlob
                imageSrc="/404ComponentImg.png"
                alt="Lost in Sanctuary"
              />
            </div>
          </div>

          <div className="order-2 text-center lg:text-left space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000 lg:pl-10">
            <div className="space-y-2 sm:space-y-4">
              <MonoText className="text-[0.75rem] sm:text-[0.8rem] md:text-[1rem] font-bold tracking-[0.5em] text-[#9B6B5C] uppercase opacity-80">
                404
              </MonoText>
              <h1
                className="font-black leading-[0.85] tracking-tighter text-[#CD5D5B] uppercase wrap-break-word"
                style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
              >
                <span className="block">Página</span>
                <span className="block">não</span>
                <span className="block">encontrada</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5C4033]/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium italic px-2 sm:px-0">
              A página que você está procurando não existe ou foi movida. Sinal
              que você está seguindo o vazio...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full mx-auto lg:mx-0 justify-center lg:justify-start">
              <button
                onClick={() => (window.location.href = "/")}
                className="cursor-pointer bg-[#F2A34C] hover:bg-[#E08E3D] text-white w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-full flex items-center justify-center gap-3 font-black text-[12px] sm:text-[14px] uppercase tracking-widest transition-all shadow-2xl shadow-[#F2A34C]/40 transform hover:-translate-y-1 active:scale-95"
              >
                <Home className="w-5 h-5 fill-current shrink-0" />
                <span>Retornar a tela inicial</span>
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="cursor-pointer border-2 border-[#E0D0C5] hover:bg-white/50 text-[#9B6B5C] w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-full flex items-center justify-center gap-3 font-black text-[12px] sm:text-[14px] uppercase tracking-widest transition-all"
              >
                <Compass className="w-5 h-5 shrink-0" />
                <span>Fazer Login</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-20 pt-10 md:pt-16 border-t border-[#E0D0C5]/60">
              <div className="space-y-1 sm:space-y-2 text-center lg:text-left">
                <MonoText className="text-[10px] text-[#9B6B5C]/60 uppercase tracking-[0.3em] font-bold">
                  Coordenadas
                </MonoText>
                <div className="text-sm sm:text-md font-bold tracking-tight">
                  51.5074° N, 0.1278° W
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2 text-center lg:text-left">
                <MonoText className="text-[10px] text-[#9B6B5C]/60 uppercase tracking-[0.3em] font-bold">
                  Estabilidade
                </MonoText>
                <div className="text-sm sm:text-md font-black text-[#CD5D5B] tracking-tight flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#CD5D5B] animate-pulse" />
                  CRÍTICO
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
