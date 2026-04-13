interface EditorialBlobProps {
  imageSrc: string;
  alt?: string;
}

export function EditorialBlob({
  imageSrc,
  alt = "Illustration",
}: EditorialBlobProps) {
  return (
    <div className="relative w-full max-w-xl aspect-square flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-white blur-[50px] opacity-40 rounded-[40%_60%_40%_60%/60%_40%_60%_40%] scale-105" />
      <div
        className="relative w-full h-full shadow-[0_20px_60px_rgba(92,64,51,0.08)]"
        style={{
          borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 50%, rgba(0,0,0,0.3) 75%, transparent 95%)",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 50%, rgba(0,0,0,0.3) 75%, transparent 95%)",
          backgroundColor: "#FFF0E0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 38%",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label={alt}
        />
        <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
