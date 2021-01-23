import express from "express";

const router = express.Router();
import { getPage, updatePage } from "../controllers/pageController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPage).put(protect, admin, updatePage);

export default router;
