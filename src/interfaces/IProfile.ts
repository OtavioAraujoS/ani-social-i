export interface IProfileTopics {
  id: string;
  title: string;
  content: string;
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
  comments: number;
}

export interface IProfileUserInfos {
  id: string;
  username: string;
  name: string;
  avatarUrl: string | null;
  rank?: "S" | "A" | "B" | "C" | "D";
}
