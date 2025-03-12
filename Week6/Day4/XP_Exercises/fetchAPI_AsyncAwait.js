// Exercise 1
// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries:
// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs
// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation
// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

// async function fetchHilariousGifs() {
//     const url =  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

//     try {
//         const response = await fetch(url)
        
        // to check if the response is OK status- 200
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`)
//         }
//         const data = await response.json()  // to parse JSON response to extract data
//         console.log("Hilarious GIFs Object:", data) //to log the full object
//         return data
        
//     } catch (error) {
//         console.error(`Failed to fetch GIFs: ${error.message}`)
//         return null
//     }
// }

// fetchHilariousGifs()


// Exercise 2 : Giphy API
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

// async function fetchSunGifts(){
// const url = "https://api.giphy.com/v1/gifs/search?q=sun&api_key=dstM7PYqUWN2DSFJVwRN2OfTFcfaCceQ&limit=10&offset=2"
// try {
//         const response = await fetch(url)
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`)
//         }
//         const data = await response.json()  // to parse JSON response to extract data
//         console.log("Gifts about the sun:", data) //to log the full object
//         return data
        
//     } catch (error) {
//         console.error(`Failed to fetch GIFs: ${error.message}`)
//         return null
//     }
// }
// EXERCISE 3
// Improve the program below :
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

// async function getStarship(){
// const url = "https://www.swapi.tech/api/starships/9/"
// try {
//  const response = await fetch(url)
//     if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
//         }
//         const data = await response.json()  // to parse JSON response to extract data
//         console.log(data.result)
//         return data
        
//     } catch (error) {
//         console.error(`Error fetching starship : ${error.message}`)
//         return null
//     }
// }
// Exercise4
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

//The function logs "calling" immediately, then after 2 seconds logs "resolved"