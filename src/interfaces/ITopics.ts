export interface ITopics {
  id: string;
  title: string;
  description: string;
  animeId: string;
  comments: number;
  createdByUser: {
    name: string;
    userName: string;
    rank: "S" | "A" | "B" | "C" | "D";
    avatarUrl: string | null;
  } | null;
  updatedByUser: {
    name: string;
    userName: string;
    rank: "S" | "A" | "B" | "C" | "D";
    avatarUrl: string | null;
  } | null;
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
}
