import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the Profile  interface
export interface IProfile extends Document {
  name: string;
  email: string;
  password: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create the Profile  schema
const ProfileSchema: Schema<IProfile> = new Schema(
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
      required: false,
    },
    //  _id: {
    //     type: String,
    //     required: false,
    //   },
  },
  {
    timestamps: true,
  },
);

// Prevent model overwrite in development
const Profile: Model<IProfile> =
  mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema);

export default Profile;
