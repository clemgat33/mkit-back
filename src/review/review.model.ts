import { IReview } from './review.interface'
import { model, Schema } from 'mongoose';

// create review schema & model
const ReviewSchema: Schema = new Schema({
  movie_id: {
    type: String,
    required: true
  },
  author_user_id: {
    type: String,
    required: true
  },
  author_username: {
    type: String,
    required: true
  },
  rate: {
    type: Number
  },
  comment: {
    type: String
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
});

export default model<IReview>("Review", ReviewSchema)
