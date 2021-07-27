import { Document } from "mongoose"

export interface IReview extends Document {
  movie_id: string;
  author_user_id: string;
  author_username: string;
  rate: 1 | 2| 3 | 4 | 5;
  comment: string;
  createdAt?: string
  updatedAt?: string
}
