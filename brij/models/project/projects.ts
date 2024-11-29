import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  category: { type: String },
  goal: { type: Number },
  endDate: { type: String },
  raised: { type: Number },
  backgroundImage: { type: String },
});

const Project =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Project;
