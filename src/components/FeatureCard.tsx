export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-white/90 dark:bg-[#121316]/40 backdrop-blur-2xl border border-slate-200 dark:border-[#00F0FF]/10 rounded-2xl p-7 hover:border-blue-300 dark:hover:border-[#00F0FF]/40 hover:bg-white dark:hover:bg-[#121316]/60 transition-all cursor-pointer overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-100 dark:from-[#00F0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-5 relative z-10">
        <div className="shrink-0 w-14 h-14 rounded-full bg-blue-50 dark:bg-[#00F0FF]/10 flex items-center justify-center border border-blue-200 dark:border-[#00F0FF]/20 text-blue-600 dark:text-[#00F0FF] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
          {icon}
        </div>
        <div>
          <h3 className="text-slate-800 dark:text-white font-black tracking-widest text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-[#00F0FF] transition-colors">
            {title}
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-white/40 font-medium dark:font-light tracking-wide leading-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
