import { FeatureCard } from "@/components/FeatureCard";
import { projectFunctions } from "@/utils/projectFunctions";
import Image from "next/image";
import animeGirlOne from "../../../../public/animeGirlOne.png";

export default function Home() {
  return (
    <main className="relative z-10 w-full flex-1 px-6 md:px-12 py-6 md:py-10 mt-4 lg:mt-0 flex flex-col lg:flex-row items-center justify-start lg:justify-center lg:gap-8 xl:gap-12 min-h-0">
      <div className="w-full lg:w-[30%] flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left">
        <div className="space-y-1 md:space-y-2">
          <div className="text-slate-500 dark:text-[#00F0FF] text-[9px] md:text-[10px] font-mono tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold dark:font-normal opacity-80 dark:opacity-70">
            NEURAL LINK // ANI SOCIAL
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-900 dark:text-[#00F0FF] leading-none md:leading-[0.9] uppercase tracking-tighter italic">
            Hub
            <br />
            Social de Animes
          </h1>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-slate-700 dark:text-white/50 leading-relaxed font-medium dark:font-light max-w-xl mx-auto lg:mx-0">
          Acesse o repositório central da cultura otaku. Sincronize metadados,
          forje conexões na rede e domine o fluxo de informações do ecossistema.
        </p>
      </div>

      <div className="w-full lg:flex-1 relative flex justify-center items-center py-6 md:py-10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-100 md:scale-110 lg:scale-125 max-w-full overflow-hidden">
          <div className="absolute w-[80vw] lg:w-[35vw] h-[80vw] lg:h-[35vw] max-w-100 lg:max-w-120 rounded-full border border-[#00F0FF]/20 animate-spin-glow opacity-30" />
          <div className="absolute w-[65vw] lg:w-[28vw] h-[65vw] lg:h-[28vw] max-w-85 lg:max-w-100 rounded-full border-2 border-[#0080FF]/20 dark:border-[#00F0FF]/60 shadow-[0_0_30px_rgba(0,128,255,0.1)] dark:shadow-[0_0_40px_rgba(0,240,255,0.3)] animate-spin-glow" />
        </div>

        <div className="relative z-10 w-full max-w-[70vw] sm:max-w-60 md:max-w-80 lg:max-w-100 xl:max-w-120 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <Image
            src={animeGirlOne}
            alt="Anime Protocol Interface"
            className="w-full h-auto max-h-[60vh] md:max-h-none object-contain mask-image-linear-to-b from-black via-black to-transparent"
            width={1100}
            height={1100}
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="w-full lg:w-[25%] xl:w-[22%] grid grid-cols-1 lg:flex lg:flex-col justify-center gap-3 md:gap-4 lg:gap-6">
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
