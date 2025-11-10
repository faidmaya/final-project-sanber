import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

const projectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model<IProject>("Project", projectSchema);
