import { FeatureCard } from "@/components/FeatureCard";
import { projectFunctions } from "@/utils/projectFunctions";
import Image from "next/image";
import animeGirlOne from "../../../../public/animeGirlOne.png";

export default function Home() {
  return (
    <main className="h-full relative z-10 w-full flex-1 px-6 md:px-12 py-10 md:py-16 grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
      <div className="lg:col-span-4 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left mt-8 lg:mt-0">
        <div className="space-y-2">
          <div className="text-slate-500 dark:text-[#00F0FF] text-[10px] font-mono tracking-[0.5em] uppercase font-bold dark:font-normal opacity-80 dark:opacity-70">
            NEURAL LINK // ANI SOCIAL
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black text-slate-900 dark:text-[#00F0FF] leading-none md:leading-[0.9] uppercase tracking-tighter italic">
            Hub
            <br />
            Social de Animes
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-white/50 leading-relaxed font-medium dark:font-light max-w-xl mx-auto lg:mx-0">
          Acesse o repositório central da cultura otaku. Sincronize metadados,
          forje conexões na rede e domine o fluxo de informações do ecossistema.
        </p>
      </div>

      <div className="lg:col-span-5 relative flex justify-center items-center py-10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110 md:scale-125 max-w-full overflow-visible">
          <div className="absolute w-[90vw] h-[90vw] max-w-137.5 max-h-137.5 rounded-full border border-[#00F0FF]/20 animate-spin-glow opacity-30" />
          <div className="absolute w-[75vw] h-[75vw] max-w-120 max-h-120 rounded-full border-[3px] border-[#0080FF]/20 dark:border-[#00F0FF]/60 shadow-[0_0_40px_rgba(0,128,255,0.1),inset_0_0_20px_rgba(0,128,255,0.1)] dark:shadow-[0_0_60px_rgba(0,240,255,0.4),inset_0_0_40px_rgba(0,240,255,0.3)] animate-spin-glow" />
          <div className="absolute w-[65vw] h-[65vw] max-w-110 max-h-110 rounded-full border border-[#D4AF37]/40 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        </div>

        <div className="relative z-10 w-full max-w-[80vw] sm:max-w-75 md:max-w-100 lg:max-w-137.5 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <Image
            src={animeGirlOne}
            alt="Anime Protocol Interface"
            className="w-full h-auto object-contain mask-image-linear-to-b from-black via-black to-transparent"
            width={1100}
            height={1100}
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-center gap-4 lg:gap-6 w-full">
        {projectFunctions.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
