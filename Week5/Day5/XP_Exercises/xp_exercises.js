// ex1
// When the user clicks the "Send" button, the data will appear in the URL bar as query parameters

// ex2
// With POST, the data is sent inside the HTTP request body, but as we are submitting the form to index.html,
//  the data will not be visible unless the page processes it with JavaScript or a backend


// Ex3
// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
// const marioGame = {
//   detail : "An amazing game!",
//   characters : {
//       mario : {
//         description:"Small and jumpy. Likes princesses.",
//         height: 10,
//         weight: 3,
//         speed: 12,
//       },
//       bowser : {
//         description: "Big and green, Hates princesses.",
//         height: 16,
//         weight: 6,
//         speed: 4,
//       },
//       princessPeach : {
//         description: "Beautiful princess.",
//         height: 12,
//         weight: 2,
//         speed: 2,
//       }
//   },
// }

// let jsonGame = JSON.stringify(marioGame)
// alert(typeof jsonGame) // string

// console.log(jsonGame)
// The nested objects remain intact, but everything is now inside a JSON string.

// Convert and Pretty Print JSON (with indentation)
// const marioGameJSON = JSON.stringify(marioGame, null, 2)
// console.log(marioGameJSON)