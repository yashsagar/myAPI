import express from "express";

const router = express.Router;

// route import
import {
  authRoute,
  movieAndTvRoute,
  searchRoute,
  landingPageData,
} from "./routes/index.js";

// utils import
import { protectRoute } from "./middleware/protectRoute.js";

// route
app.router("/v1/auth", authRoute);
app.router("/v1/data", protectRoute, movieAndTvRoute);
app.router("/v1/search", protectRoute, searchRoute);
app.router("/v1/landingPageData", landingPageData);

export default router;
