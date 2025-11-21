import { Schema, model, Document } from "mongoose";

export interface PromoBase extends Document {
  category: string;
  title: string;
  image: string;
}

const PromoSchema = new Schema<PromoBase>(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const Promo = model<PromoBase>("Promo", PromoSchema);
