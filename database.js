import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_LOCAL_SERVER_URL
    );
    console.log("mongoDB connected: " + connection.connection.host);
  } catch (error) {
    console.error("error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
