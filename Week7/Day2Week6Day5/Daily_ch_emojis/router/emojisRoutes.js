import express from "express";
const router = express.Router();
import { emojis } from "../data/emojis.js";
import {
  getRandomElementFromArray,
  generateOption,
  shuffeArray,
} from "../utils/utils.js";
let leaderboard = []; // Guardamos los puntajes

router.get("/play", (req, res) => {
  const randomEmoji = getRandomElementFromArray(emojis);
  const guesingOtiond = generateOption(randomEmoji.name, emojis);
  const shuffelddArray = shuffeArray(guesingOtiond);
  res.json({ randomEmoji, guesingOtiond: shuffelddArray });
});

router.post("/guess", (req, res) => {
  const { emoji, guess, player } = req.body;
  const correctEmoji = emojis.find((e) => e.emoji === emoji);
  const isCorrect = correctEmoji && correctEmoji.name === guess;
  let playerScore = 0;
  if (isCorrect) {
    // Buscar al jugador en el leaderboard
    let playerEntry = leaderboard.find((p) => p.name === player);
    if (playerEntry) {
      playerEntry.score++; // Aumentar puntaje si ya existe
    } else {
      leaderboard.push({ name: player, score: 1 }); // Nuevo jugador
    }
  }
  leaderboard.sort((a, b) => b.score - a.score); // Ordenar por mayor puntaje
  // Obtener el puntaje actualizado del jugador
  playerScore = leaderboard.find((p) => p.name === player)?.score || 0;
  res.json({ correct: isCorrect, score: playerScore, leaderboard });
});

router.get("/leaderboard", (req, res) => {
  res.json(leaderboard);
});

export default router;
