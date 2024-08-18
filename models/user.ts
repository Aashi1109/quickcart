import { IUser } from "@/types";
import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String },
    name: { type: String },
    image: { type: String },
    settings: {
      type: Object,
      default: { currency: { name: "USD", value: 1 } },
    },
    likedProducts: { type: [Schema.Types.Mixed], default: [] },
  },
  { timestamps: true }
);

const User = models?.User || model("User", userSchema);

export default User;
