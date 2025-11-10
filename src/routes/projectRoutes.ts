import express from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController";
import { protect, adminOnly } from "../middleware/authMiddleware";

const router = express.Router();

// ✅ Get all projects or create new project
router.route("/")
  .get(protect, getProjects)
  .post(protect, adminOnly, createProject);

// ✅ Get, update, or delete project by ID
router.route("/:id")
  .get(protect, getProjectById)
  .put(protect, adminOnly, updateProject)
  .delete(protect, adminOnly, deleteProject);

export default router;
