export default function LoadingCollections() {
  const skeletonCards = Array.from({ length: 12 });
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f8] dark:bg-[#0f1113] w-full pt-10 font-sans transition-colors duration-300">
      <div className="flex flex-col flex-1 gap-10 w-full px-10 pb-6">
        <div className="flex flex-col gap-4 animate-pulse">
          <div className="flex flex-col gap-2">
            <div className="h-3 w-32 bg-[#e2e8f0] dark:bg-[#1a1c1e] rounded-full"></div>
            <div className="h-10 w-64 bg-[#cbd5e1] dark:bg-[#2d3135] rounded-lg"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2">
            <div className="h-12 w-full bg-[#f8f9fa] dark:bg-[#1a1c1e] border border-[#eaedf1] dark:border-[#2d3135] rounded-full"></div>
            <div className="h-12 w-full md:w-56 bg-[#cbd5e1] dark:bg-[#2d3135] rounded-full shrink-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-[#1a1c1e] rounded-2xl overflow-hidden border border-[#eaedf1] dark:border-[#2d3135] animate-pulse"
            >
              <div className="w-full aspect-2/3 bg-[#eef1f5] dark:bg-[#25282c]"></div>

              <div className="p-4 pt-6 flex flex-col gap-2 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-full bg-[#f1f5f9] dark:bg-[#2d3135] rounded"></div>
                  <div className="h-4 w-2/3 bg-[#f1f5f9] dark:bg-[#2d3135] rounded"></div>
                </div>
                <div className="h-3 w-1/3 bg-[#e2e8f0] dark:bg-[#25282c] rounded mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto h-16 w-full bg-white border border-[#eaedf1] rounded-2xl dark:bg-[#1a1c1e] dark:border-[#2d3135] animate-pulse"></div>
      </div>
    </div>
  );
}
