import Task from "@/db/models/Task";
import Project from "@/db/models/Project";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();
  const { id } = request.query;

  if (request.method === "POST") {
    try {
      const taskData = request.body;
      const task = await Task.create(taskData);
      const project = await Project.findById(id);
      project.tasks.push(task._id);
      await project.save();

      return response.status(201).json({ message: "Task created" });
    } catch (error) {
      console.error(
        `Can not create task for the project with id ${id}: ${error}`
      );
      return response.status(400).json({ message: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
