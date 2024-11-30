import { NextResponse } from "next/server";
import connection from "../../../lib/mongo";
import User from "../../../models/user";

export async function POST(request) {
  try {
    await connection();
    const //
      { address, likedProjects } = await request.json();

    // check if user exists
    if (await User.findOne({ address: address })) {
      await User.updateOne(
        { address: address },
        { $addToSet: { likedProjects: likedProjects } } // Add newObjectId if not present
      );
    } else {
      await new User({ address, likedProjects }).save();
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request) {
  try {
    await connection();
  } catch (error) {
    console.log(error.message | error.shortMessage);
  }
}
