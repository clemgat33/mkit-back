import { IUser } from './user.interface'
import { model, Schema } from 'mongoose';

// create user schema & model
const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  favorites: {
    type: Array
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
});

export default model<IUser>("User", UserSchema)
