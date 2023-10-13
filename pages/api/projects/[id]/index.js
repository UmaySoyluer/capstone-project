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

  if (request.method === "DELETE") {
    try {
      await Project.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: "Project deleted successfully" });
    } catch (error) {
      console.error(`Can't delete project ${id}: ${error}`);
      return response
        .status(505)
        .json({ status: `Can't delete project ${id}` });
    }
  }
  return response.status(405).json({ message: "Method not allowed" });
}
