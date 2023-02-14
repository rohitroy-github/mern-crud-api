const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const {protect} = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;

// // routeFileFprGoals

// const express = require("express");

// const router = express.Router();

// // importingControllers
// const {
//   getGoals,
//   setGoals,
//   updateGoals,
//   deleteGoals,
// } = require("../controllers/goalController");

// const {protect} = require("../middleware/authMiddleware");

// // getMethod
// // router.get("/", (req, res) => {
// //   res.status(200).json({message: "Get goals !"});
// // });
// router.get("/", protect, getGoals);

// // postMethod
// // router.post("/", (req, res) => {
// //   res.status(200).json({message: "Set goal !"});
// // });
// router.post("/", protect, setGoals);

// // putMethodToUpdateAData
// // router.put("/:id", (req, res) => {
// //   res.status(200).json({message: `Update goal ${req.params.id}`});
// // });
// router.put("/:id", protect, updateGoals);

// // deleteMethodToDeleteAData
// // router.delete("/:id", (req, res) => {
// //   res.status(200).json({message: `Delete goal ${req.params.id}`});
// // });
// router.delete("/:id", protect, deleteGoals);

// module.exports = router;
