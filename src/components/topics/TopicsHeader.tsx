import { SquarePen } from "lucide-react";
import { motion } from "motion/react";

export function TopicsHeader() {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
      <div className="flex flex-col gap-1">
        <p className="text-[#8899a6] dark:text-[#94a3b8] text-xs font-bold tracking-widest uppercase">
          Fórum
        </p>
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight tracking-tight text-[#0a1128] dark:text-[#f1f5f9]">
          Tópicos da Comunidade
        </h1>
      </div>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer bg-primary-container text-white px-8 py-5 rounded-full font-black text-xs uppercase tracking-widest text-center flex justify-center items-center gap-3 shadow-2xl"
      >
        <SquarePen className="w-3 h-3" />
        Criar Tópico
      </motion.button>
    </header>
  );
}
