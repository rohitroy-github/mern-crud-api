// asyncHandlerForMongooseHandling
const asyncHandler = require("express-async-handler");

// functionToGetGoals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: "Get goals !"});
});

// functionToSetGoals
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    // expressErrorHandler
    throw new Error("Please add a text field data ! ");
  }
  //   console.log(req.body);
  res.status(200).json({message: "Set goal !"});
});

// functionToUpdateGoals
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`});
});

// functionToDeleteGoals
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`});
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
