const express = require("express");
const {
  getAllUsers,
  getUserByEmail,
  deleteUser,
} = require("../controller/UsersController");

const router = express.Router();

router.get("/getAll", getAllUsers);
router.get("/getOne/:email", getUserByEmail);
router.delete("/delete/:email", deleteUser);

module.exports = router;
