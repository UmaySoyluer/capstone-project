import connect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    try {
      const projects = (await Project.find({})).reverse();
      return response.status(200).json(projects);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
