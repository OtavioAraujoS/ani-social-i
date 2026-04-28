import { Calendar, Monitor } from "lucide-react";
import dayjs from "dayjs";

import { ITopics } from "@/interfaces/ITopics";
import { motion } from "motion/react";
import Image from "next/image";

export function CommentsTopicHeader({ topic }: { topic: ITopics }) {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-primary"></span>
          <span className="text-[10px] tracking-widest uppercase text-primary font-bold">
            Fórum / Discussão / Teorias
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-tight max-w-2xl">
          {topic.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 mb-10">
          <div className="flex items-center gap-3">
            <Image
              src={topic.createdByUserId?.avatarUrl || "/notFoundPicture.png"}
              alt="Shinji_Editor"
              className="w-10 h-10 rounded-full border border-primary/30"
              width={40}
              height={40}
              unoptimized
            />
            <div>
              <div className="text-xs text-on-surface font-bold">
                {topic?.createdByUserId?.userName}
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">
                Rank {topic?.createdByUserId?.rank}
              </div>
            </div>
          </div>
          <div className="h-6 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Monitor size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Anime: {topic?.animeInfos?.title}
            </span>
          </div>
          <div className="h-6 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-slate-500" />
            <span
              suppressHydrationWarning
              className="text-[10px] uppercase tracking-widest text-slate-500"
            >
              {topic?.createdAt
                ? dayjs(topic?.createdAt).format("DD/MM/YYYY HH:mm")
                : new Date().toISOString()}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
