export function HeaderHome({
  title,
  subtitle,
  subtitleFunction,
  description,
}: {
  title: string;
  subtitle: string;
  subtitleFunction: string;
  description: string;
}) {
  return (
    <div>
      <div className="space-y-1 md:space-y-2">
        <div className="text-slate-500 dark:text-[#00F0FF] text-[9px] md:text-[10px] font-mono tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold dark:font-normal opacity-80 dark:opacity-70">
          {title}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-900 dark:text-[#00F0FF] leading-none md:leading-[0.9] uppercase tracking-tighter italic">
          {subtitle}
          <br />
          {subtitleFunction}
        </h1>
      </div>

      <p className="text-base lg:text-lg text-slate-700 dark:text-[#E8F7FF] font-bold leading-relaxed dark:font-light max-w-xl mx-auto lg:mx-0">
        {description}
      </p>
    </div>
  );
}
