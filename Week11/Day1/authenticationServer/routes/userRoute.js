const { Router } = require("express");
const userController = require("../controllers/userController.js");

const {verifyToken} = require('../middlewares/verifyToken.js')

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.logingUser);

router.get('/all', verifyToken, userController.getAllUsers)

module.exports = router;
