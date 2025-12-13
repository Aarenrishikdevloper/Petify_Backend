// TypeScript Interface
export interface IFeedback {
 user: string;
 feedback: string;
 time: Date;
}

// Mongoose Schema (for MongoDB with Mongoose)
import mongoose, { Schema, Document } from "mongoose";

export interface IFeedbackDocument extends IFeedback, Document {}

const FeedbackSchema: Schema = new Schema(
 {
  user: {
   type: String,
   required: true,
   trim: true,
  },
  feedback: {
   type: String,
   required: true,
  },
  time: {
   type: Date,
   required: true,
   default: Date.now,
  },
 },
 {
  timestamps: true, // Adds createdAt and updatedAt fields
 },
);

export const Feedback = mongoose.model<IFeedbackDocument>(
 "Feedback",
 FeedbackSchema,
);
