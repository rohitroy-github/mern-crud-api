// routeFileFprGoals

const express = require("express");

const router = express.Router();

// importingControllers
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

// getMethod
// router.get("/", (req, res) => {
//   res.status(200).json({message: "Get goals !"});
// });
router.get("/", getGoals);

// postMethod
// router.post("/", (req, res) => {
//   res.status(200).json({message: "Set goal !"});
// });
router.post("/", setGoals);

// putMethodToUpdateAData
// router.put("/:id", (req, res) => {
//   res.status(200).json({message: `Update goal ${req.params.id}`});
// });
router.put("/:id", updateGoals);

// deleteMethodToDeleteAData
// router.delete("/:id", (req, res) => {
//   res.status(200).json({message: `Delete goal ${req.params.id}`});
// });
router.delete("/:id", deleteGoals);

module.exports = router;
