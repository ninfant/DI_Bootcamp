// Array of planets with their moons
const solarSystem = [
  { name: "Mercury", color: "gray", moons: [] },
  { name: "Venus", color: "yellow", moons: [] },
  { name: "Earth", color: "blue", moons: ["Moon"] },
  { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
  {
    name: "Jupiter",
    color: "orange",
    moons: ["Io", "Europa", "Ganymede", "Callisto"],
  },
  {
    name: "Saturn",
    color: "goldenrod",
    moons: ["Titan", "Enceladus", "Mimas"],
  },
  {
    name: "Uranus",
    color: "lightblue",
    moons: ["Titania", "Oberon", "Umbriel", "Miranda", "Ariel"],
  },
  { name: "Neptune", color: "darkblue", moons: ["Triton", "Proteus"] },
];

// Select the section where planets will be added
const section = document.querySelector(".listPlanets")

// Loop through the planets array and create divs
solarSystem.forEach((planet) => {
  const planetDiv = document.createElement("div")
  planetDiv.classList.add("planet")
  planetDiv.style.backgroundColor = planet.color
  planetDiv.textContent = planet.name

  // Add moons to the planet
  planet.moons.forEach((moon, index) => {
    const moonDiv = document.createElement("div")
    moonDiv.classList.add("moon")
    moonDiv.style.transform = `rotate(${
      index * (360 / planet.moons.length)
    }deg) translate(70px)`; // Position the moons around the planet
    planetDiv.appendChild(moonDiv)
  })

  section.appendChild(planetDiv)
})
