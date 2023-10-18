import mongoose from "mongoose";
import "./Task";

const { Schema, model, models } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    teamLead: {
      type: String,
      required: true,
    },
    tasks: {
      type: [Schema.Types.ObjectId],
      ref: "Task",
    },
  },
  { timestamps: true }
);

const Project = models?.projects || model("projects", projectSchema);
export default Project;
