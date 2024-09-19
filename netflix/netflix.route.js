import express from "express";
const router = express.Router();

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
router.use("/v1/auth", authRoute);
router.use("/v1/data", protectRoute, movieAndTvRoute);
router.use("/v1/search", protectRoute, searchRoute);
router.use("/v1/landingPageData", landingPageData);

export default router;
