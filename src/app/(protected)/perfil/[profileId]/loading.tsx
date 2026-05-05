export default function LoadingProfile() {
  return (
    <div className="min-h-screen bg-surface/50 flex font-sans selection:bg-blue-primary/30">
      <main className="flex-1 pl-10 pr-4 lg:pl-20 lg:pr-8 pb-12 relative w-full">
        <div className="mt-20 lg:px-20 relative z-10 w-full">
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex flex-wrap items-center gap-12">
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl border-4 border-white/10 glass-panel p-1 relative z-10 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 glass-panel z-20 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-lg" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-32 h-6 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                <div className="flex flex-col gap-2">
                  <div className="w-64 h-12 lg:h-16 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                  <div className="w-48 h-10 lg:h-14 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-40 h-12 self-center rounded glass-panel bg-slate-200 dark:bg-slate-800 animate-pulse" />
          </div>

          <div className="mt-24 flex flex-col gap-12">
            <div className="flex flex-col gap-12">
              <section>
                <div className="flex items-center mb-8">
                  <div className="w-64 h-10 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                </div>
                <div className="flex flex-wrap gap-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[140px] md:w-[160px] h-[220px] md:h-[240px] rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse glass-panel"
                    />
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-8">
                  <div className="w-56 h-10 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                </div>
                <div className="flex flex-wrap gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-48 h-16 rounded glass-panel bg-slate-200 dark:bg-slate-800 animate-pulse"
                    />
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-64 h-10 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                </div>
                <div className="flex flex-col gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="glass-panel p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg shrink-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                        <div className="flex flex-col gap-2 w-full mt-1">
                          <div className="w-full max-w-2xl h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                          <div className="w-3/4 max-w-xl h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                          <div className="w-24 h-3 mt-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
