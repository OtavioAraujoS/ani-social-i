import { ITopics } from "@/interfaces/ITopics";
import { User, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function TopicRow({ topic }: { topic: ITopics }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ backgroundColor: "rgba(15, 23, 42, 0.6)" }}
      className="glass-panel group transition-all duration-100 rounded-xl p-4 md:px-8 md:py-6 grid grid-cols-12 items-center gap-4 cursor-pointer"
    >
      <div className="col-span-12 md:col-span-6">
        <div className="flex items-center gap-4">
          <div
            className={`size-2 rounded-full ${topic.title ? "bg-primary animate-pulse" : "bg-slate-700"}`}
          ></div>
          <h3 className="text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors tracking-tight">
            {topic.title}
          </h3>
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 flex items-center gap-2">
        <div className="size-8 md:size-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/70 dark:border-white/50">
          {topic.createdByUserId?.avatarUrl ? (
            <Image
              className="w-full h-full object-cover"
              src={topic.createdByUserId?.avatarUrl}
              alt={topic.createdByUserId?.name}
              width={40}
              height={40}
            />
          ) : (
            <User className="w-3 h-3 text-slate-500" />
          )}
        </div>
        <span className="text-xs md:text-[1rem] font-medium text-slate-400">
          {topic.createdByUserId?.name}
        </span>
      </div>
      <div className="col-span-6 md:col-span-3 flex justify-center">
        <span className="px-3 py-1 bg-primary/10 text-primary border-l border-primary text-[9px] font-black uppercase tracking-widest leading-none">
          {topic.animeInfos.title}
        </span>
      </div>
      <div className="col-span-12 md:col-span-1 flex items-center justify-end gap-2 text-slate-500">
        <span className="text-xs md:text-[1rem] font-bold">
          {topic.comments}
        </span>
        <MessageCircle className="w-4 h-4" />
      </div>
    </motion.div>
  );
}
