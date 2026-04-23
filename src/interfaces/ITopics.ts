export interface ITopics {
  id: string;
  title: string;
  description: string;
  animeInfos: {
    id: string;
    title: string;
    imageUrl: string | null;
  };
  createdByUserId: {
    name: string;
    userName: string;
    rank: "S" | "A" | "B" | "C" | "D";
    avatarUrl: string | null;
  } | null;
  updatedByUserId: {
    name: string;
    userName: string;
    rank: "S" | "A" | "B" | "C" | "D";
    avatarUrl: string | null;
  } | null;
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
  comments: number;
}
