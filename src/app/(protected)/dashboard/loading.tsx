export default function DashboardLoading() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f15] p-6 md:p-10 font-sans text-slate-200">
      <div className="flex justify-between items-center mb-12 animate-pulse">
        <div className="flex flex-col gap-2">
          <div className="h-3 w-32 bg-white/10 rounded-full"></div>
          <div className="h-8 w-64 bg-white/20 rounded-md"></div>
        </div>

        <div className="h-12 w-40 bg-white/10 rounded-full border border-white/5"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-12">
          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-orange-500 rounded-sm"></div>
                <div className="h-4 w-64 bg-white/10 rounded-md"></div>
              </div>
              <div className="h-10 w-36 bg-orange-500/20 rounded-md"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-2/3 bg-white/5 rounded-md border border-white/5 animate-pulse"
                ></div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-cyan-500 rounded-sm"></div>
                <div className="h-4 w-48 bg-white/10 rounded-md"></div>
              </div>
              <div className="h-10 w-32 bg-cyan-500/20 rounded-md"></div>
            </div>

            <div className="w-full h-40 bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col justify-between animate-pulse">
              <div className="flex justify-between w-full">
                <div className="h-6 w-40 bg-white/10 rounded-full"></div>
                <div className="h-4 w-24 bg-white/5 rounded-md"></div>
              </div>
              <div className="h-6 w-3/4 bg-white/10 rounded-md mt-4"></div>
              <div className="h-4 w-1/2 bg-white/5 rounded-md mt-2"></div>
              <div className="h-4 w-32 bg-cyan-500/20 rounded-md mt-auto"></div>
            </div>
          </section>
        </div>

        <div className="col-span-1">
          <div className="w-full bg-white/5 rounded-xl border border-white/5 p-6 animate-pulse">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-cyan-500 rounded-sm"></div>
                <div className="h-4 w-24 bg-white/10 rounded-md"></div>
              </div>
              <div className="h-3 w-16 bg-white/5 rounded-md"></div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 bg-white/10 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 w-24 bg-white/10 rounded-md"></div>
                <div className="h-3 w-3/4 bg-white/5 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
