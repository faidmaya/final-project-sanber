import express from "express";
import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController";
import { protect, adminOnly } from "../middleware/authMiddleware";

const router = express.Router();

// ✅ Get all tasks or create a new task
router.route("/")
  .get(protect, getTasks)
  .post(protect, adminOnly, createTask);

// ✅ Get, update, or delete task by ID
router.route("/:id")
  .get(protect, getTaskById)
  .put(protect, adminOnly, updateTask)
  .delete(protect, adminOnly, deleteTask);

export default router;
