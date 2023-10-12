import connect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await connect();

  const { id } = request.query;

  if (!id) return;

  if (request.method === "GET") {
    try {
      const project = await Project.findById(id);
      return response.status(200).json(project);
    } catch (error) {
      return response.status(404).json({ status: "Page not found" });
    }
  }
  if (request.method === "PUT") {
    try {
      const projectData = request.body;
      await Project.findByIdAndUpdate(id, projectData);
      return response.status(200).json({ message: "Project updated" });
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}