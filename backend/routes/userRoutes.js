const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register new user
router.route("/").post(registerUser).get(protect,allUsers);

// User login
router.post("/login", authUser);

module.exports = router;
