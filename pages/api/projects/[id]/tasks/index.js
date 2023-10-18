import Task from "@/db/models/Task";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    try {
      const tasks = (await Task.find({})).reverse();
      return response.status(200).json(tasks);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
  response.status(405).json({ message: "Method not allowed" });
}
