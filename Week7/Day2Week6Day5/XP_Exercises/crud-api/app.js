// Building A Basic CRUD API With Express And Axios Using A Data Module
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.

//--------Part 2: Setting Up the Express Server--------
// In app.js, import the express module and create an instance of an Express app.
const express = require("express");
const app = express();
app.use(express.json()); // this is for the body parser  to get what is in the body

const PORT = 5001;

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
app.listen(PORT, () => {
  console.log(`The port ${PORT} is running properly`);
});

//Part 3: Using the Data Module in the Express App

//esto solo usa fetchPosts() en un script de Node.js para imprimir los datos en la consola.
const { fetchPosts } = require("./data/dataService");

fetchPosts()
  .then((posts) => {
    console.log("Fetched Posts (First 5):", posts.slice(0, 5)); // Mostrar solo 5 posts
  })
  .catch((error) => {
    console.error("Failed to fetch posts:", error.message);
  });

// Endpoint para obtener los posts desde JSONPlaceholder
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts(); // llamamos a fetchPosts()

    // Mensaje en la consola indicando que los datos se obtuvieron con éxito
    console.log(
      `Successfully retrieved ${posts.length} posts and sent as response.`
    );

    res.json(posts); // enviar los posts como JSON
  } catch (error) {
    console.error("Failed to retrieve posts.");
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});
