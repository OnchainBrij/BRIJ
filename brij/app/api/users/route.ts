import { NextResponse } from "next/server";
import connection from "../../../lib/mongo";
import User from "../../../models/user";

export async function POST(request) {
  try {
    await connection();
    const //
      { name, address } = await request.json(),
      newUser = new User({ name, address });
    if (await User.findOne({ address: address })) {
      return NextResponse.json({ message: "User already exists", data: {} });
    } else {
      await newUser.save();
      return NextResponse.json({ message: "Stored user", newUser });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request) {
  try {
    await connection();

    const users = await User.find({});
    return NextResponse.json({ message: "Fetched all users", users });
  } catch (error) {
    console.log(error.message | error.shortMessage);
  }
}
