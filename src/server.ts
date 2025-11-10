import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();
const app = express();

// 🔹 Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// 🧩 Serve file frontend (folder public)
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// 🔹 Routes API
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// 🔹 Fallback ke index.html (biar SPA / refresh tetap jalan)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// 🔹 Koneksi MongoDB
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error", err));

// 🔹 Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
