import mongoose, { Document, Schema } from "mongoose";

export interface ITask {
  title: string;
  description?: string;
  status?: "pending" | "in progress" | "done";
  project: mongoose.Types.ObjectId;
  assignedTo?: mongoose.Types.ObjectId;
}
export interface ITaskDocument extends ITask, Document {}

const TaskSchema = new Schema<ITaskDocument>({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["pending", "in progress", "done"], default: "pending" },
  project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model<ITaskDocument>("Task", TaskSchema);
