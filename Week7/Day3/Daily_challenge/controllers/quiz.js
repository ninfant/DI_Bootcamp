import { triviaQuestions } from "../config/data.js";

let currentQuestionIndex = 0;
let userScore = 0;

const getAllquiz = (req, res) => {
  res.json(triviaQuestions);
};

const displayfirstQuestion = (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    const question = triviaQuestions[currentQuestionIndex].question;
    res.json({ question });
  } else res.json({ message: " quiz conpleted!" });
};

const submitAnswer = (req, res) => {
  const { answer } = req.body;
  const currentQuestion = triviaQuestions[currentQuestionIndex];
  if (!currentQuestion) {
    return res.status(400).json({ message: "No more question." });
  }
  currentQuestionIndex++;
  if (answer.toLowerCase() !== currentQuestion.answer.toLowerCase()) {
    res.status(404).json({ error: "Not a good answer" });
    return;
  }
  userScore++;
  res.status(200).json({ message: "quiz completed" });
};

const getScore = (req, res) => {
  // console.log(res.locals.userid);
  res.json({ message: "the score is " + userScore });
};

export { getAllquiz, displayfirstQuestion, submitAnswer, getScore };
