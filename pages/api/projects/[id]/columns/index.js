import Project from "@/db/models/Project";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();

  const { id } = request.query;

  if (request.method === "POST") {
    try {
      const column = request.body;
      const project = await Project.findById(id);
      project.columns.push(column);
      await project.save();

      return response.status(201).json({ message: "Column created" });
    } catch (error) {
      console.error(
        `Can not create column for the project with id ${id}: ${error}`
      );
      return response.status(400).json({ message: error.message });
    }
  }

  if (request.method === "PUT") {
    try {
      const { columns } = request.body;

      const updatedProject = await Project.findByIdAndUpdate(
        id,
        { $set: { columns: columns } },
        { new: true }
      );

      return response.status(200).json(updatedProject);
    } catch (error) {
      console.error(`Can not edit column with id ${id}: ${error}`);
      return response.status(400).json({ message: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
