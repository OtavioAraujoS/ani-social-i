import { FeatureCard } from "@/components/FeatureCard";
import { animesFeatures } from "@/utils/projectFunctions";
import Image from "next/image";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { HeaderHome } from "@/components/HeaderHome";

export const metadata = {
  title: "Animes - AniSocial",
  description:
    "Descubra novos animes, explore o catálogo e encontre seus títulos favoritos.",
};

export default function AnimesHomePage() {
  const leftContent = (
    <HeaderHome
      title="NEURAL LINK // ANI SOCIAL"
      subtitle="CATÁLOGO"
      subtitleFunction="DE ANIMES"
      description="Explore o universo dos animes através de uma interface neural. Descubra novos títulos, sincronize suas preferências e conecte-se com outros fãs em uma rede descentralizada."
    />
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
