import { IReview } from "@/types";
import { Schema } from "mongoose";

// TODO review database implementation
export const reviewSchema = new Schema<IReview>({
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
});
