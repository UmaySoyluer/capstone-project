import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tag: {
      type: String,
    },
    columnId: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    priority: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = models?.Task || model("Task", taskSchema);

export default Task;
