const { Router } = require("express");
const {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  getOneUser,
  searchUserByName,
} = require("../controllers/users.js");

const { auth } = require("../middlewares/auth.js");

const router = Router();

router.get("/", auth(), getAllUsers);

router.get("/:id", auth(), getOneUser);

router.get("/search", searchUserByName);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

router.post("/", createUser);

module.exports = router;
