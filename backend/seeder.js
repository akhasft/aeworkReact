import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./data/users.js";
import page from "./data/page.js";
import works from "./data/works.js";
import User from "./models/userModel.js";
import Page from "./models/pageModel.js";
import Work from "./models/workModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Page.deleteMany();
    await Work.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    await Page.insertMany(page);

    const adminUser = createdUsers[0]._id;

    const sampleWorks = works.map((work) => {
      return { ...work, user: adminUser };
    });

    await Work.insertMany(sampleWorks);

    console.log("data imported");

    process.exit();
  } catch (e) {
    console.log(`error while importing  ${e}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Work.deleteMany();
    await Page.deleteMany();
    await User.deleteMany();

    console.log("data destroy");

    process.exit();
  } catch (e) {
    console.log(`error while destroying  ${e}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
