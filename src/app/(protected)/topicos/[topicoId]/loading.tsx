export default function LoadingIndividualTopic() {
  return (
    <div className="min-h-screen font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 blur-[120px] rounded-full -ml-48 -mb-48" />
      </div>

      <main className="xl:pl-64 pt-20 min-h-screen relative z-10">
        <div className="w-full px-4 md:px-12 py-12">
          <div className="flex flex-col mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-slate-200 dark:bg-slate-800 animate-pulse"></span>
              <div className="w-48 h-3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            </div>

            <div className="w-full max-w-2xl h-12 md:h-16 bg-slate-200 dark:bg-slate-800 rounded mb-6 animate-pulse" />

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="space-y-2">
                  <div className="w-24 h-3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                  <div className="w-16 h-2 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                </div>
              </div>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
              <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
              <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-8">
                <div className="glass-panel p-6 rounded-3xl animate-pulse">
                  <div className="border-l-4 border-slate-200 dark:border-slate-800 pl-8 py-4 space-y-3">
                    <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="w-5/6 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="w-4/6 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
                  </div>
                </div>

                <section>
                  <div className="flex items-center justify-between mb-8 animate-pulse">
                    <div className="w-48 h-8 bg-slate-200 dark:bg-slate-800 rounded" />
                  </div>

                  <div className="glass-panel p-6 rounded-2xl mb-6 animate-pulse">
                    <div className="flex gap-4">
                      <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                      <div className="flex-1 space-y-4">
                        <div className="w-full h-24 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                        <div className="flex justify-end">
                          <div className="w-32 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="flex gap-6 glass-panel rounded-xl p-4 animate-pulse"
                      >
                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <div className="flex-1 space-y-3 pt-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded" />
                              <div className="w-20 h-3 bg-slate-200 dark:bg-slate-800 rounded" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded" />
                            <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-800 rounded" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
