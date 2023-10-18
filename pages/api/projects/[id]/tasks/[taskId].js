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
  return response.status(405).json({ message: "Method not allowed." });
}
