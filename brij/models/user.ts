import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  address: { type: String, required: true },
  likedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Projects" }], // Array of ObjectIds referencing another model
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
