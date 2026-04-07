import { FeatureCard } from "@/components/FeatureCard";
import { animesFeatures } from "@/utils/projectFunctions";
import Image from "next/image";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";

export default function AnimesHomePage() {
  const leftContent = (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-900 dark:text-[#00F0FF] leading-none md:leading-[0.9] uppercase tracking-tighter italic">
          CATÁLOGO
          <br />
          DE ANIMES
        </h1>
        <div className="flex items-center gap-3 pt-2">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0080FF] dark:text-[#00F0FF] dark:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
            OTAKU_SYNC // ANI SOCIAL
          </div>
        </div>
        <div className="h-0.5 w-full max-w-50 mt-2 bg-linear-to-r from-[#0080FF] dark:from-[#00F0FF] to-transparent opacity-60"></div>
      </div>

      <p className="max-w-md text-sm font-medium leading-relaxed text-slate-700 dark:text-white/60">
        Explore o universo dos animes através de uma interface neural. Descubra
        novos títulos, sincronize suas preferências e conecte-se com outros fãs
        em uma rede descentralizada.
      </p>
    </>
  );

  const centerContent = (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute h-[60vw] w-[60vw] lg:h-[35vw] lg:w-[35vw] rounded-full border border-[#0080FF]/10 dark:border-[#00F0FF]/15 animate-spin-glow-slow" />
        <div className="absolute h-[45vw] w-[45vw] lg:h-[26vw] lg:w-[26vw] rounded-full border border-dashed border-[#0080FF]/20 dark:border-[#00F0FF]/30 opacity-60 shadow-[0_0_40px_rgba(0,128,255,0.1)] dark:shadow-[0_0_40px_rgba(0,240,255,0.1)] animate-spin-glow-reverse" />
      </div>
      <div className="relative z-10 w-full max-w-70 lg:max-w-100 xl:max-w-125">
        <Image
          src="/animeGirlTwo.png"
          alt="Cyber-Lofi Hero Character"
          width={700}
          height={900}
          className="relative z-10 w-full h-auto object-contain dark:drop-shadow-[0_0_40px_rgba(0,240,255,0.3)] mask-image-linear-to-b from-black via-black to-transparent"
          priority
        />
      </div>
    </>
  );

  const rightContent = (
    <>
      {animesFeatures.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </>
  );

  return (
    <ThreeColumnLayout
      leftContent={leftContent}
      centerContent={centerContent}
      rightContent={rightContent}
    />
  );
}
