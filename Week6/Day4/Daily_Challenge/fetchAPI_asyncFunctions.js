// // Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// // In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// // In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// // The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// // Allow the user to delete a specific gif by clicking the DELETE button.
// // Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


// document.getElementById('myForm').addEventListener('submit', getUserInput)
// document.getElementById('deleteAllBtn').addEventListener('click', deleteAllGifs)


// async function getUserInput(event){
// event.preventDefault()
//  const userEntry= document.getElementById('userEntry').value.trim()
//  if (!userEntry) {
//         alert("Please enter a category to search for a GIF")
//         return
//     }
//     const gifData = await FetchGift(userEntry)
//     if (gifData) {
//         displayGif(gifData)
//     }
// }

// async function FetchGift(userSearch){
//     const url = `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(userSearch)}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&`
//     try {
//         const response = await fetch(url)
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`)
//         }
//         const mydata = await response.json()
//         return mydata.data.images.original.url // Extract GIF URL
//     } catch (error) {
//         console.error(`Failed to fetch GIFs: ${error.message}`)
//         return null
//     }   
// }

// function displayGif(gifUrl) {
//     const gifContainer = document.getElementById('gifContainer')

     // a div to hold the GIF and its delete button
//     const gifWrapper = document.createElement('div')

    // const img = document.createElement('img') // Create an image element for the GIF
//     img.src = gifUrl;
//     img.alt = "Random Giphy GIF"
//     img.style.width = "300px"

//     const myButton =document.createElement('button') //the delete button for this GIF
//     myButton.textContent ='Delete'

//     gifWrapper.appendChild(img) // append GIF and button to the wrapper div
//     gifWrapper.appendChild(myButton)

//     gifContainer.appendChild(gifWrapper) // append the wrapper to the main container

//     myButton.addEventListener('click', removeGift)

//     function removeGift(e){
//         gifWrapper.remove()
//     }

// } delete all the gifs
// function deleteAllGifs() {
//     document.getElementById('gifContainer').innerHTML = ""
// }