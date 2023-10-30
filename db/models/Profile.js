import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Profile = models?.users || model("users", profileSchema);
export default Profile;
