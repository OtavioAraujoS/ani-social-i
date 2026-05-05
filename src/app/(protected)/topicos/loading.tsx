export default function LoadingTopics() {
  return (
    <main className="flex-1 space-y-8 md:space-y-12 p-10 lg:p-12 overflow-y-auto w-full">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="w-16 h-3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
          <div className="w-64 md:w-96 h-10 md:h-12 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
        </div>
        <div className="w-full md:w-40 h-12 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
      </header>

      <div className="flex flex-col xl:flex-row items-center justify-between glass-panel rounded-3xl xl:rounded-full px-6 py-6 xl:py-3 mb-8 gap-5 border border-black/10 dark:border-white/20 relative z-10 w-full animate-pulse">
        <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 md:gap-6 w-full xl:w-auto">
          <div className="w-20 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="flex gap-4">
            <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
          </div>
        </div>
        <div className="w-full lg:w-160 h-10 bg-slate-200 dark:bg-slate-800 rounded-full" />
      </div>

      <div className="space-y-4 relative z-10">
        <div className="hidden md:grid px-8 py-2 gap-4 grid-cols-12 animate-pulse">
          <div className="col-span-6 h-3 bg-slate-200 dark:bg-slate-800 rounded w-32" />
          <div className="col-span-2 h-3 bg-slate-200 dark:bg-slate-800 rounded w-24" />
          <div className="col-span-3 h-3 bg-slate-200 dark:bg-slate-800 rounded w-20 mx-auto" />
          <div className="hidden lg:block col-span-1 h-3 bg-slate-200 dark:bg-slate-800 rounded w-16 ml-auto" />
        </div>

        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="glass-panel p-6 md:px-8 md:py-6 rounded-2xl animate-pulse"
            >
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                  <div className="size-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-3/4 h-5 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>

                <div className="col-span-12 md:col-span-2 flex items-center gap-2">
                  <div className="size-8 md:size-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="w-20 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>

                <div className="col-span-12 md:col-span-3 flex justify-center">
                  <div className="w-24 h-6 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>

                <div className="col-span-12 md:col-span-1 flex items-center justify-end gap-2">
                  <div className="w-6 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="size-4 bg-slate-200 dark:bg-slate-800 rounded-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 animate-pulse">
        <div className="w-48 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-slate-200 dark:bg-slate-800 rounded"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
