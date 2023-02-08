// controllersForUserRoutes

const jwt = require("jsonwebtoken");

// forEncryptingPasswordsUnderDB
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// functionForRegisteringNewUser
const registerUser = asyncHandler(async (req, res) => {
  res.json({message: "Register user !"});
});

// functionForLoginUser
const loginUser = asyncHandler(async (req, res) => {
  res.json({message: "Login user !"});
});

// functionForFetchingUserDetails
const getMe = asyncHandler(async (req, res) => {
  res.json({message: "User !"});
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
