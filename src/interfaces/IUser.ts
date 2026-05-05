export interface ICreatedByUser {
  name: string;
  userName: string;
  rank: "S" | "A" | "B" | "C" | "D";
  avatarUrl: string | null;
}

export interface IUpdateUser {
  userId: string;
  name: string;
  userName: string;
}

export type IUpdatedByUser = ICreatedByUser;
