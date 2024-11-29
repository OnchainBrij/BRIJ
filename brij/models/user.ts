import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String, required: true },
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
