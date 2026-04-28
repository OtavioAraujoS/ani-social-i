import { ICreatedByUser } from "./IUser";

export interface IComment {
  content: string;
  createdAt: string;
  createdByUserId: ICreatedByUser | null;
  id: string;
  topicId: string;
  updatedAt: string;
}
