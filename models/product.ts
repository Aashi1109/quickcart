import { IProduct } from "@/types";
import { Schema } from "mongoose";
import { reviewSchema } from "./review";

// TODO product database implementation

export const productSchema = new Schema<IProduct>(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    brand: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: { type: [String], required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviews: { type: [reviewSchema], required: true },
    warrantyInformation: { type: String, required: true },
    shippingInformation: { type: String, required: true },
    tags: { type: [String], required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);
