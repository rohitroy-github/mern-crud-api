const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const {protect} = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;

// const express = require("express");

// const router = express.Router();

// const {
//   registerUser,
//   loginUser,
//   getMe,
// } = require("../controllers/userController");

// // importingMiddleware
// const {protect} = require("../middleware/authMiddleware");

// // postRequest
// router.post("/", registerUser);

// // postRequest
// router.post("/login", loginUser);

// // getRequest
// // passingMiddleWare
// router.get("/me", protect, getMe);

// module.exports = router;
