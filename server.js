import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// route import
import netFlix from "./netflix/netflix.route.js";

// utils import
import { connectDB } from "./database.js";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// route
app.use("/netflix", netFlix);

app.get("/test", (req, res) => {
  res.status(200).send("main route working");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`sever started at http://localhost:${process.env.PORT}`);

  connectDB();
});
