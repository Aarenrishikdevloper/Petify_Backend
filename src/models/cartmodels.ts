import { Schema, model, Document, Types } from "mongoose";

// 1. TypeScript Interface for the Cart Model
// This defines the structure of a Cart document in TypeScript
export interface ICart extends Document {
 user_id: string;
 product: Types.ObjectId; // Renamed to productId and set as a reference
 quantity: number;
}

// 2. Mongoose Schema for the Cart Model
// This defines the structure and types for MongoDB
const CartSchema = new Schema<ICart>({
 user_id: {
  type: String,
  required: true,
 },
 product: {
  type: Schema.Types.ObjectId, // MongoDB ObjectId type
  ref: "Product", // This creates the reference to the 'Product' model
  required: true,
 },
 quantity: {
  type: Number,
  required: true,
  min: 1, // Optional: Add a minimum quantity
 },
});

// 3. Mongoose Model
// This is the actual model that you will use to interact with the MongoDB collection
export const CartModel = model<ICart>("Cart", CartSchema);

/*
// Example of a Product Model (assuming it exists for the reference to work)
// You would have a similar structure for your Product model
export interface IProduct extends Document {
  name: string;
  price: number;
  // ... other product fields
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // ...
});

export const ProductModel = model<IProduct>('Product', ProductSchema);
*/
