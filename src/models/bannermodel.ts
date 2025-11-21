import { Schema, model, Document } from "mongoose";

export interface BannerBase extends Document {
  category: string;
  title: string;
  image: string;
}

const BannerSchema = new Schema<BannerBase>(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const Banner = model<BannerBase>("Banner", BannerSchema);
