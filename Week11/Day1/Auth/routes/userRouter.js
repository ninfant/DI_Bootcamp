import { Router } from "express";
import userController from "../controllers/userControllers.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/all", verifyToken, userController.getAllUsers);
router;
export default router;
