// Creating a Data Module for Axios
// Inside the crud-api directory, create a new directory named data.
// Inside the data directory, create a new file named dataService.js.
// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.
// Export the fetchPosts function.



// Creating a Data Module for Axios
const axios = require("axios");

/**
 * Fetches all posts from JSONPlaceholder API using Axios.
 * @returns {Promise} A promise resolving to the list of posts.
 */
async function fetchPosts() {
  try {
    // aquí estamos usando AXIOS para hacer una petición GET
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; // retorna los datos de la API
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
}

// exporto la función para usarla en otros archivos
module.exports = { fetchPosts };
