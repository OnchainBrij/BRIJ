import { NextResponse } from "next/server";
import connection from "../../../lib/mongo";
import Project from "../../../models/project/projects";

export async function POST(request) {
  try {
    console.log({ connection: await connection() });
    const t: Number = 1;

    const //
      { name, image, category, goal, endDate, raised, backgroundImage } =
        await request.json(),
      newProject = new Project({
        name,
        image,
        category,
        goal,
        endDate,
        raised,
        backgroundImage,
      });
    if (await Project.findOne({ name: name })) {
      return NextResponse.json({ message: "Project already exists", data: {} });
    } else {
      await newProject.save();

      return NextResponse.json({ message: "Stored Project", newProject });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request) {
  try {
    await connection();

    const Projects = await Project.find({});
    return NextResponse.json({ message: "Fetched all Projects", Projects });
  } catch (error) {
    console.log(error.message | error.shortMessage);
  }
}
