import asyncHandler from "express-async-handler";
import Page from "../models/pageModel.js";

// @desc    Fetch  page data
// @route   GET /api/page
// @access  Public
const getPage = asyncHandler(async (req, res) => {
  const page = await Page.find({});

  res.json(page);
});

// @desc    Fetch  page data
// @route   GET /api/page
// @access  Public
const getPageById = asyncHandler(async (req, res) => {
  const page = await Page.findById(req.params.id);

  res.json(page);
});

// @desc    Update  page data
// @route   GET /api/page
// @access  Public
const updatePage = asyncHandler(async (req, res) => {
  const page = await Page.findById(req.params.id);

  const {
    backgroundColor,
    primaryColor,
    accentColor,
    instaUrl,
    githubUrl,
    codepenUrl,
    mail,
    heading,
    subHeading,
    position,
    aboutMeHeading,
    aboutMeDescription,
    workHeading,
  } = req.body;

  if (page) {
    page.backgroundColor = backgroundColor;
    page.primaryColor = primaryColor;
    page.accentColor = accentColor;
    page.instaUrl = instaUrl;
    page.githubUrl = githubUrl;
    page.codepenUrl = codepenUrl;
    page.mail = mail;
    page.heading = heading;
    page.subHeading = subHeading;
    page.position = position;
    page.aboutMeHeading = aboutMeHeading;
    page.aboutMeDescription = aboutMeDescription;
    page.workHeading = workHeading;

    const UpdatedPage = await page.save();
    res.status(201).json(UpdatedPage);
  } else {
    res.status(400);
    throw new Error("Page not Found");
  }
});

export { getPage, updatePage, getPageById };
