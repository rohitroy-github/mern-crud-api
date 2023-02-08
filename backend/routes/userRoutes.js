const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// postRequest
router.post("/", registerUser);

// postRequest
router.post("/login", loginUser);

// getRequest
router.get("/me", getMe);

module.exports = router;
