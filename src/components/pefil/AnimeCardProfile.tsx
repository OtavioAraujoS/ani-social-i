import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export const AnimeCard = ({
  title,
  status,
  index,
  image,
}: {
  title: string;
  status: string;
  index: string;
  image: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative h-80 w-56 glass-panel overflow-hidden border-white/5"
  >
    <div className="absolute inset-0 z-0">
      <Image
        src={image}
        width={500}
        height={500}
        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
        alt={title}
        unoptimized
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-indigo-950 via-indigo-950/20 to-transparent" />
    </div>
    <div className="absolute top-4 right-4 sanctuary-label text-white/50">
      {index}
    </div>
    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="font-bold text-xl leading-tight mb-1 text-cyan-200">
        {title}
      </h3>
      <p className="sanctuary-label text-blue-accent">{status}</p>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        className="h-px bg-blue-primary mt-4"
      />
    </div>
    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
      <ChevronRight size={18} className="text-blue-primary" />
    </div>
  </motion.div>
);
