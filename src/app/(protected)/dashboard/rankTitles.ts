import { Rank } from "@/lib/jwt";

export const rankTitles: Record<Rank, string> = {
  S: "O Protagonista",
  A: "O Herói",
  B: "O Vilão",
  C: "O Personagem_de_Fundo",
  D: "O Slime",
};

export const rankColors: Record<Rank, string> = {
  S: "text-yellow-400",
  A: "text-blue-400",
  B: "text-red-400",
  C: "text-gray-400",
  D: "text-pink-400",
};
