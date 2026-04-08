import Image from "next/image";

export function RegisterHero() {
  return (
    <section className="hidden md:block relative w-full md:w-1/2 lg:w-3/5 min-h-[40vh] md:min-h-screen overflow-hidden group">
      <div className="absolute inset-0 bg-slate-950 z-10 opacity-30"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#191c1d] z-10"></div>
      <Image
        alt="Anime illustration of a serene view"
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-5000 ease-out"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 60vw"
        src="/registerWallpaper.jpg"
      />
      <div className="relative z-20 h-full flex flex-col justify-between p-8 sm:p-12">
        <div className="flex items-center space-x-2">
          <span className="font-black text-3xl sm:text-4xl uppercase tracking-tighter text-[#fffbff]">
            Ani/Social
          </span>
        </div>
        <div className="max-w-xl">
          <div className="h-px w-12 bg-[#59e054] mb-6"></div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#c4c5d6] mb-3">
            Protocolo de Criação
          </p>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-white leading-none mb-4 [text-shadow:0_0_20px_rgba(32,81,206,0.4)]">
            JUNTE-SE A <br />
            <span className="text-[#59e054]">COMUNIDADE</span>
          </h1>
          <p className="text-[#f5f5f5] text-sm sm:text-base lg:text-lg font-medium tracking-tight max-w-md">
            Crie sua conta e faça parte de uma comunidade apaixonada por animes.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest uppercase text-[#747685]">
              Status do Sistema
            </span>
            <span className="text-xs font-bold text-[#f8f9fa] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#59e054] animate-pulse"></span>
              ATIVO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
