import asyncHandler from "express-async-handler";
import Work from "../models/workModel.js";

// @desc    get all work
// @route   GET /api/works/
// @access  Public
const getWorks = asyncHandler(async (req, res) => {
  const works = await Work.find({}).populate("user", "id name");
  res.json(works);
});

// @desc    Create New  work
// @route   POST /api/works/
// @access  Private/Admin
const addWorkItems = asyncHandler(async (req, res) => {
  const { title, image, url, code } = req.body;

  const work = new Work({
    user: req.user._id,
    title,
    image,
    url,
    code,
  });

  const createdWork = await work.save();
  res.status(201).json(createdWork);
});

// @desc    get  work by id
// @route   GET /api/works/:id
// @access  Public
const getWorkById = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (work) {
    res.json(work);
  } else {
    res.status(400);
    throw new Error("don't find work with this id");
  }
});

// @desc    Update Work
// @route   PUT /api/works/:id
// @access  Private/admin
const updateWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.params.id);

  const { title, image, url, code } = req.body;

  if (work) {
    work.title = title;
    work.image = image;
    work.url = url;
    work.code = code;

    const updatedWork = await work.save();
    res.json(updatedWork);
  } else {
    res.status(400);
    throw new Error("don't find work with this id");
  }
});

// @desc    delete Work
// @route   delete /api/works/:id
// @access  Private/admin
const deleteWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.params.id);

  if (work) {
    await work.remove();
    res.json({
      message: "Work Remove",
    });
  } else {
    res.status(404);
    throw new Error("Work not found");
  }
});

export { getWorks, getWorkById, addWorkItems, updateWork, deleteWork };
