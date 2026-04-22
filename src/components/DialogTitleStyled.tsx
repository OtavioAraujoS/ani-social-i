export function DialogTitleStyled({
  title,
  description,
  descriptionReason,
  children
}: {
  title: string;
  description: string;
  descriptionReason?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex flex-col z-10 min-h-0">
      <div className="flex-1 px-12 py-8 overflow-y-auto min-h-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-primary/30 dark:bg-primary/50"></div>
          <span className="sanctuary-label text-primary dark:text-slate-300">
            {title}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mb-6 text-3xl md:text-6xl font-black text-indigo-900 dark:text-slate-100 tracking-tighter leading-[0.9]">
          <span>{description}</span>
          {descriptionReason && (
            <span className="text-primary dark:text-blue-400">
              {descriptionReason}
            </span>
          )}
        </div>
        {children}
      </div>
    </main>
  );
}
