require("dotenv").config();

import mongoose from "mongoose";

const //
  connection = async () => {
    try {
      await mongoose.connect(process.env.DB as string, {
        serverSelectionTimeoutMS: 30000,
      });
      console.log("connected to DB");
    } catch (err) {
      console.log(err);
    }
  };

export default connection;
