import { model, models, Schema } from "mongoose";
import { productSchema } from "./product";
import { ICart } from "@/types";

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    // We are using dummy api so storing products directly here else from db
    products: { type: [Schema.Types.Mixed], required: true },
    originalTotal: { type: Number },
    discountedTotal: { type: Number },
  },
  { timestamps: true }
);

const Cart = models?.Cart || model("Cart", cartSchema);

export default Cart;
