import express from "express";

import {
  getAllquiz,
  displayfirstQuestion,
  submitAnswer,
  getScore
} from "../controllers/quiz.js";

const router = express.Router();

//get current question
// // router.get("/quiz", getAllquiz);
router.get("/", displayfirstQuestion);

//POST an answer
router.post("/", submitAnswer);

//Get score
router.get("/score", getScore);

export default router;
