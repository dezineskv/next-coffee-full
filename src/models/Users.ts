import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  _id: string;
  id?: string; // optional or mapped
  createdAt: Date;
  updatedAt: Date;
}

// Create the User schema
const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is invalid'],
    },
    password: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent model overwrite in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
