import mongoose from "mongoose";
import ENV_VARS from "./netflix/config/envVars.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV_VARS("DATABASE"));
    console.log("mongoDB connected: " + connection.connection.host);
  } catch (error) {
    console.error("error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
