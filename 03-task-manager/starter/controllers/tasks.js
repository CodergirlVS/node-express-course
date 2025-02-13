const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require('../error/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find(); //{ completed: true }
  res.status(200).json({ tasks });
  //res.status(200).json({ tasks, amount:tasks.length });
  //res.status(200).json({ success: true, data:{tasks, nbHits: tasks.length } });
  // res
  //   .status(200)
  //   .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))

  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
  }
  res.status(200).json({ task });
  //res.status(200).send()
  //res.status(200).json({ task: null, status: "Not valid id" });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, //shows new value
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
  }
  res.status(200).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, //shows new value
    runValidators: true,
    overwrite: true, // removes all the options
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};

//put is for full update
//patch is for partial update
