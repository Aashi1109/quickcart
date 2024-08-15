import config from "@/config";
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongoodb already connected");
    return;
  }

  try {
    await mongoose.connect(config.db.url, {
      dbName: config.db.name,
    });
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    console.error("Error in MongoDB data connection");
  }
};
