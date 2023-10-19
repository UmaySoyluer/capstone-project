import connect from "@/db/connect";
import Task from "@/db/models/Task";

export default async function handler(request, response) {
  await connect();

  const { taskId } = request.query;

  if (!taskId) return;

  if (request.method === "GET") {
    try {
      const task = await Task.findById(taskId);
      return response.status(200).json(task);
    } catch (error) {
      return response.status(404).json({ status: "Task not found" });
    }
  }

  if (request.method === "PUT") {
    try {
      const taskData = request.body;
      const updatedTask = await Task.findByIdAndUpdate(taskId, taskData);

      return response.status(200).json(updatedTask);
    } catch (error) {
      console.error(`Can not edit task with id ${taskId}: ${error}`);
      return response.status(400).json({ message: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Task.findByIdAndDelete(taskId);
      return response.status(200).json({ status: "Task deleted successfully" });
    } catch (error) {
      console.error(`Can't delete Task ${taskId}: ${error}`);
      return response
        .status(500)
        .json({ status: `Can't delete Task ${taskId}` });
    }
  }

  return response.status(405).json({ message: "Method not allowed." });
}
