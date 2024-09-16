import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/netflix-new-db"
    );
    console.log("mongoDB connected: " + connection.connection.host);
  } catch (error) {
    console.error("error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
