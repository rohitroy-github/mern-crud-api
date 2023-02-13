// controllerForGoalFunctions

// asyncHandlerForMongooseHandling
const asyncHandler = require("express-async-handler");

// importingModels
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// importingRoutes
// const {use} = require("../routes/goalRoutes");

// functionToGetGoals
const getGoals = asyncHandler(async (req, res) => {
  // findingAllAvailableGoals
  // const goals = await Goal.find();

  // findingAllAvailableGoalsForSpecificUser
  const goals = await Goal.find({user: req.user.id});

  res.status(200).json(goals);
});

// functionToSetGoals
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    // expressErrorHandler
    throw new Error("Please add a text field data ! ");
  }

  // createANewGoal
  const goal = await Goal.create({
    text: req.body.text,
    // settingAUserForThisGoal
    user: req.user.id,
  });

  //   console.log(req.body);
  res.status(200).json(goal);
});

// functionToUpdateGoals
const updateGoals = asyncHandler(async (req, res) => {
  // fetchingGoalWithIDForCheckingAvailibility
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found !");
  }

  // const user = await User.findById(req.user.id);

  // CheckPresence
  if (!req.user) {
    res.status(401);
    throw new Error("User not found !");
  }

  // makingSureLoggedInUser===GoalUser
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized !");
  }

  // fetchingGoalAndUpdating
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// functionToDeleteGoals
const deleteGoals = asyncHandler(async (req, res) => {
  // fetchingGoalWithIDForCheckingAvailibility
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found !");
  }

  // const user = await User.findById(req.user.id);

  // CheckPresence
  if (!req.user) {
    res.status(401);
    throw new Error("User not found !");
  }

  // makingSureLoggedInUser===GoalUser
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized !");
  }

  // deletingGoal
  goal.remove();

  // displayingDeletedGoalId
  res.status(200).json({message: "Goal deleted !", id: req.params.id});
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
