import { Document, model, Schema } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  displayName: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    trim: true,
  },
  displayName: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
