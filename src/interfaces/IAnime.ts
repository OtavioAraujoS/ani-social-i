import { ICreatedByUser, IUpdatedByUser } from "./IUser";

export interface IAnime {
  id: string;
  title: string;
  description: string;
  episodes: number;
  review: string | null;
  stars: number | null;
  imageUrl: string | null;
  status: "COMPLETED" | "RELEASING" | "PENDING";
  createdAt?: Date | string | number;
  updatedAt?: Date | string | number;
  createdByUser?: ICreatedByUser;
  updatedByUser?: IUpdatedByUser;
}
