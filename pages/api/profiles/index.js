import connect from "@/db/connect";
import Profile from "@/db/models/Profile";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    try {
      const profiles = await Profile.find({});
      return response.status(200).json(profiles);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
