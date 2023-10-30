import connect from "@/db/connect";
import Profile from "@/db/models/Profile";

export default async function handler(request, response) {
  await connect();

  const { id } = request.query;

  if (!id) return;

  if (request.method === "GET") {
    try {
      const profile = await Profile.findById(id);
      return response.status(200).json(profile);
    } catch (error) {
      console.error(`Can't fetch profile :  ${error}`);
      return response.status(404).json({ status: "Not found" });
    }
  }
  return response.status(405).json({ message: "Method not allowed" });
}
