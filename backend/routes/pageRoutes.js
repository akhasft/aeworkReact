import express from "express";

const router = express.Router();
import {
  getPage,
  updatePage,
  getPageById,
} from "../controllers/pageController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPage);
router.route("/:id").get(getPageById);
router.route("/:id").put(protect, admin, updatePage);

export default router;
