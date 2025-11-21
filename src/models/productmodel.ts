import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  category: string;
  //id: string;
  maxQuantity: number;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "No description" },
    image: { type: String, required: false, default: "" },
    oldPrice: { type: Number, default: 0 },
    newPrice: { type: Number, default: 0 },
    category: { type: String, required: true },
    //id: { type: String, required: true, unique: true }, // matches your Dart id
    maxQuantity: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
