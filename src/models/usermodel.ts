import mongoose, { Schema, Document } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
}

const UserSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  address: { type: String, default: "" },
  phone: { type: String, default: "" },
});

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);
