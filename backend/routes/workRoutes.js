import express from "express";
import {
  getWorks,
  getWorkById,
  addWorkItems,
  updateWork,
  deleteWork,
} from "../controllers/workController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getWorks);
router.route("/").post(protect, admin, addWorkItems);
router
  .route("/:id")
  .get(getWorkById)
  .put(protect, admin, updateWork)
  .delete(protect, admin, deleteWork);

export default router;
