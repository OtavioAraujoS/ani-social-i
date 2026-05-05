import { FeatureCard } from "@/components/FeatureCard";
import Image from "next/image";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { forumFeatures } from "@/utils/projectFunctions";
import { HeaderHome } from "@/components/HeaderHome";

export const metadata = {
  title: "Fórum - AniSocial",
  description: "Plataforma onde discussões ganham vida e ideias se conectam",
};

export default function ForumHomePage() {
  const leftContent = (
    <HeaderHome
      title="NEURAL LINK // ANI SOCIAL"
      subtitle="COLISÃO"
      subtitleFunction="DE IDEIAS"
      description="        Onde as discussões ganham vida e as ideias se conectam. O epicentro da
        comunidade Otaku. Um espaço vibrante onde fãs se reúnem para celebrar
        sua paixão compartilhada por animes."
    />
  );

  const centerContent = (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-100 md:scale-110 lg:scale-125 max-w-full overflow-hidden">
        <div className="absolute w-[80vw] lg:w-[35vw] h-[80vw] lg:h-[35vw] max-w-100 lg:max-w-120 rounded-full border border-[#00F0FF]/20 animate-spin-glow-slow opacity-30" />
        <div className="absolute w-[65vw] lg:w-[28vw] h-[65vw] lg:h-[28vw] max-w-85 lg:max-w-100 rounded-full border-2 border-[#0080FF]/20 dark:border-[#00F0FF]/60 shadow-[0_0_30px_rgba(0,128,255,0.1)] dark:shadow-[0_0_40px_rgba(0,240,255,0.3)] animate-spin-glow-reverse" />
      </div>

      <div className="relative z-10 w-full max-w-[70vw] sm:max-w-60 md:max-w-80 lg:max-w-100 xl:max-w-120 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
        <Image
          src="/animeGirlThree.png"
          alt="Cyber-Lofi Forum"
          width={1100}
          height={1100}
          className="w-full h-auto max-h-[60vh] md:max-h-none object-contain mask-image-linear-to-b from-black via-black to-transparent"
          priority
          unoptimized
        />
      </div>
    </>
  );

  const rightContent = (
    <>
      {forumFeatures.map((feature) => (
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
