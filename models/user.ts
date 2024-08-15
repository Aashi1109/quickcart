import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String },
    name: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
