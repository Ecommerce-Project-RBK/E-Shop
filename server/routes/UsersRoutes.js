const express = require("express");
const {
  getAllUsers,
  getUserByEmail,
  deleteUser,
  
} = require("../controller/UsersController");
const{changeUserRole}=require("../controller/authController")
const jwtMiddleware = require("../middleware/jwtMiddleware");

const router = express.Router();
// all these routes are protected because they are admin features

// get all users
router.get("/getAll",  getAllUsers);
// get one user by his email
router.get("/getOne/:email",  getUserByEmail);
// delete a user by his email
router.delete("/delete/:email",  deleteUser);
// update/change user's role
router.put("/change-role", changeUserRole);

module.exports = router;
