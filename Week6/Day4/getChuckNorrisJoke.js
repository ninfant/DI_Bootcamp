// Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:
// https://api.chucknorris.io/jokes/random?category={category}
// Check out the API Chuck Norris Documentation : https://api.chucknorris.io/
// Make sure to check the Response status and throw an error accordingly
async function getChuckNorrisJoke(category) {
    const url = `https://api.chucknorris.io/jokes/random?category=${encodeURIComponent(category)}`;
    try {
        const response = await fetch(url)
        // Check if the response is OK (status 200)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }
        const data = await response.json()
        console.log(`Chuck Norris Joke: ${data.value}`)
        return data.value;
    } catch (error) {
        console.error(`Failed to fetch joke: ${error.message}`)
        return null
    }
}

// Example usage:
getChuckNorrisJoke("dev");  // Fetch a joke from the "dev" category
