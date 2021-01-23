import mongoose from "mongoose";

// init page schema
const pageSchema = mongoose.Schema(
  {
    backgroundColor: {
      type: String,
      required: true,
    },
    accentColor: {
      type: String,
      required: true,
    },
    primaryColor: {
      type: String,
      required: true,
    },
    instaUrl: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
    },
    codepenUrl: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    aboutMeHeading: {
      type: String,
      required: true,
    },
    aboutMeDescription: {
      type: String,
      required: true,
    },
    workHeading: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// converting schema into model
const Page = mongoose.model("Page", pageSchema);
// export model
export default Page;
