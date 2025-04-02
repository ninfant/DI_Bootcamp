import express from "express";
import {
  sendMessage,
  RegisterInputData,
} from "../controller/apiControllers.js";
const router = express.Router();

router.get("/hello", sendMessage);
router.post("/world", RegisterInputData);


export default router;
