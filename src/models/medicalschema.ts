import { Schema, model, Document } from "mongoose";
import { IUserPet } from "./userpetmodel";

// TypeScript interface
interface IMedical extends Document {
  pet: IUserPet["_id"];
  date: Date;
  medication: string;
  notes?: string;
  status: string;
  isNotified?: boolean;
  isNewMedical?: boolean;
}

// Mongoose schema
const medicalSchema = new Schema<IMedical>(
  {
    pet: { type: Schema.Types.ObjectId, ref: "UserPet", required: true },
    date: {
      type: Date,
      required: true,
    },
    medication: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      required: true,
    },
    isNotified: {
      type: Boolean,
      required: false,
      default: false,
    },
    isNewMedical: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

// Model
const Medical = model<IMedical>("Medical", medicalSchema);

export { Medical, IMedical };
