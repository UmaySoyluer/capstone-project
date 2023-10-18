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
