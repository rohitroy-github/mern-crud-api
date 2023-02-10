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

const {protect} = require("../middleware/authMiddleware");

// getMethod
// router.get("/", (req, res) => {
//   res.status(200).json({message: "Get goals !"});
// });
router.get("/", protect, getGoals);

// postMethod
// router.post("/", (req, res) => {
//   res.status(200).json({message: "Set goal !"});
// });
router.post("/", protect, setGoals);

// putMethodToUpdateAData
// router.put("/:id", (req, res) => {
//   res.status(200).json({message: `Update goal ${req.params.id}`});
// });
router.put("/:id", protect, updateGoals);

// deleteMethodToDeleteAData
// router.delete("/:id", (req, res) => {
//   res.status(200).json({message: `Delete goal ${req.params.id}`});
// });
router.delete("/:id", protect, deleteGoals);

module.exports = router;
