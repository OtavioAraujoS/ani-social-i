import { ICreatedByUser, IUpdatedByUser } from "./IUser";

export interface IDashboardResponse {
  recentAnimes: IRecentAnimes[];
  recentTopics: IRecentTopics[];
  releasingAnimes: IReleasingAnimes[];
}

export interface IRecentAnimes {
  id: string;
  title: string;
  description: string;
  episodes: number;
  review: string | null;
  stars: number | null;
  imageUrl: string | null;
  status: "COMPLETED" | "RELEASING" | "PENDING";
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
  createdByUser: ICreatedByUser | null;
  updatedByUser: IUpdatedByUser | null;
}

export interface IRecentTopics {
  id: string;
  title: string;
  description: string;
  animeId: string;
  comments: number;
  createdByUser: ICreatedByUser | null;
  updatedByUser: IUpdatedByUser | null;
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
}

export interface IReleasingAnimes {
  id: string;
  title: string;
  description: string;
  episodes: number;
  review: string | null;
  stars: number | null;
  imageUrl: string | null;
  status: "COMPLETED" | "RELEASING" | "PENDING";
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
  createdByUser: ICreatedByUser | null;
  updatedByUser: IUpdatedByUser | null;
}
