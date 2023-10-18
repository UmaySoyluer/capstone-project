import Task from "@/db/models/Task";
import Project from "@/db/models/Project";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();
  const { id, taskId } = request.query;

  if (request.method === "PUT") {
    try {
      const taskData = request.body;
      await Task.findByIdAndUpdate(taskId, taskData);

      return response.status(201).json({ message: "Task updated" });
    } catch (error) {
      console.error(`Can not edit task with id ${taskId}: ${error}`);
      return response.status(400).json({ message: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
