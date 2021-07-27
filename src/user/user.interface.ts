import { Document } from "mongoose"

export interface IUser extends Document {
  username: string;
  favorites: number[];
  createdAt?: string
  updatedAt?: string
}
