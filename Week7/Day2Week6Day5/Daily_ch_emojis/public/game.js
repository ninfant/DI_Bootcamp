async function submitGuess(emoji, guess) {
  const playerName = document.getElementById("playerName").value || "Anonymous";
  try {
    const res = await fetch("http://localhost:3001/guess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emoji, guess, player: playerName }), // Enviamos el nombre del jugador
    });
    const data = await res.json();
    alert(data.correct ? "Correct!" : " Wrong! Try again.");
    // Actualizar puntaje en la pantalla
    document.getElementById("score").textContent = data.score;
    // Actualizar leaderboard
    updateLeaderboard();
  } catch (error) {
    console.error("Error submitting guess:", error);
  }
}

// Obtener emojis para jugar
async function getEmojisToPlay() {
  try {
    const res = await fetch("http://localhost:3001/play");
    const data = await res.json();
    render(data.randomEmoji, data.guesingOtiond);
  } catch (error) {
    console.error("Error fetching emojis:", error);
  }
}

// Renderizar emoji y opciones
function render(emoji, options) {
  const root = document.getElementById("root");
  root.innerHTML = `Emoji: ${emoji.emoji} <br>`;

  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => submitGuess(emoji.emoji, option);
    root.appendChild(btn);
  });
}

// Obtener leaderboard y actualizarlo en la pantalla
async function updateLeaderboard() {
  try {
    const res = await fetch("http://localhost:3001/leaderboard");
    const leaderboard = await res.json();

    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = ""; // Limpiar antes de actualizar

    leaderboard.forEach((player) => {
      const li = document.createElement("li");
      li.textContent = `${player.name}: ${player.score} pts`;
      leaderboardElement.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
  }
}

// Cargar leaderboard al inicio
updateLeaderboard();
