// controllersForUserRoutes

const jwt = require("jsonwebtoken");

// forEncryptingPasswordsUnderDB
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const {user} = require("../routes/userRoutes");

// functionForRegisteringNewUser
const registerUser = asyncHandler(async (req, res) => {
  // destructuringData
  const {name, email, password} = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill up all the fields !");
  }

  // checkIfUserAlreadyExistsUsingEmailProperty?
  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error("User already exists !");
  }

  // hashPasswordUsingbcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // createUser
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // ifUserIsCreated?
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data !");
  }
  // res.json({message: "Register user !"});
});

// functionForLoginUser
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials !");
  }
  res.json({message: "Login user !"});
});

// functionForFetchingUserDetails
const getMe = asyncHandler(async (req, res) => {
  // here [req.user] = userLogginInCurrently
  const {_id, name, email} = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// functionToGenerateToken
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    // tokenExpiresIn10Days
    expiresIn: "10d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
