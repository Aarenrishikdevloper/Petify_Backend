import mongoose, { Document, Schema } from "mongoose";
import { IUserDocument } from "./usermodel";

export interface IUserPet extends Document {
  owner: IUserDocument["_id"]; // Relationship to User
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
}

const UserPetsSchema: Schema<IUserPet> = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true }, // <-- relation
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
  },
  { timestamps: true },
);

export const UserPetsModel = mongoose.model<IUserPet>(
  "UserPet",
  UserPetsSchema,
);
