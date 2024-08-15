import { model, models, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    // We are using dummy api so storing products directly here else from db
    products: { type: Array<Object>, required: true },
    originalTotal: Number,
    discountedTotal: Number,
  },
  { timestamps: true }
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
