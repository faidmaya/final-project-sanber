import { Request, Response } from "express";
import Project from "../models/Project";

// ✅ Ambil semua project
export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Ambil project berdasarkan ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Buat project baru
export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description, deadline } = req.body;

    if (!name || !deadline) {
      return res.status(400).json({ message: "Name and deadline are required" });
    }

    const newProject = await Project.create({
      name,
      description: description || "",
      startDate: new Date(),
      endDate: new Date(deadline),
    });

    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Update project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { name, description, deadline } = req.body;
    const updateData: any = {};

    if (name) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (deadline) updateData.endDate = new Date(deadline);

    const project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Hapus project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
