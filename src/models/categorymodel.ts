import { Schema, model, Document } from "mongoose";

// Interface for TypeScript type checking
interface ICategory extends Document {
 name: string;
 image: string;
 priority: number;
}

// MongoDB Schema
const CategorySchema = new Schema<ICategory>(
 {
  name: {
   type: String,
   required: true,
  },
  image: {
   type: String,
   required: true,
  },
  priority: {
   type: Number,
   required: true,
  },
 },
 {
  timestamps: true, // Adds createdAt and updatedAt fields
 },
);

// Export the model
export const Category = model<ICategory>("Category", CategorySchema);
export type { ICategory };
