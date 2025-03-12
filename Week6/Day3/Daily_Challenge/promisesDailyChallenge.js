// 1st Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

// const arraywords = ['hello', 'hi', 'Boo']

// function makeAllCaps(arraywords) {
//     return new Promise((resolve, reject) => {
//         if (arraywords.every(item => typeof item === "string")) {
//             resolve(arraywords.map(word => word.toUpperCase())) // Convert to uppercase
//         } else {
//             reject('Not all the words are strings') // Reject with error message
//         }
//     })
// }
// makeAllCaps(['hello', 'hi', 'Boo'])
//     .then(result => console.log(result)) // ["HELLO", "HI", "BOO"]
//     .catch(error => console.log(error))


// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// const uperCaseWords = ["HELLO", "HI", "BOO"]
// function sortWords(uperCaseWords){
// return new Promise((resolve, reject) => {
// if (uperCaseWords.length > 4)
// {
//      resolve(uperCaseWords.sort())
// }else {
//     reject('the array has a small lenght')
 
//      }
// })  
// }
// sortWords(uperCaseWords)
// .then(result => console.log(result))  
// .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"]) 
//       .then((arr) => sortWords(arr)) //sortWords is never called because makeAllCaps failed
//       .then((result) => console.log(result))
//       .catch(error => console.log(error)) //Not all the words are strings



// 2nd Daily Challenge
// const morse = `{
//   "0": "-----",
//   "1": ".----",
//   "2": "..---",
//   "3": "...--",
//   "4": "....-",
//   "5": ".....",
//   "6": "-....",
//   "7": "--...",
//   "8": "---..",
//   "9": "----.",
//   "a": ".-",
//   "b": "-...",
//   "c": "-.-.",
//   "d": "-..",
//   "e": ".",
//   "f": "..-.",
//   "g": "--.",
//   "h": "....",
//   "i": "..",
//   "j": ".---",
//   "k": "-.-",
//   "l": ".-..",
//   "m": "--",
//   "n": "-.",
//   "o": "---",
//   "p": ".--.",
//   "q": "--.-",
//   "r": ".-.",
//   "s": "...",
//   "t": "-",
//   "u": "..-",
//   "v": "...-",
//   "w": ".--",
//   "x": "-..-",
//   "y": "-.--",
//   "z": "--..",
//   ".": ".-.-.-",
//   ",": "--..--",
//   "?": "..--..",
//   "!": "-.-.--",
//   "-": "-....-",
//   "/": "-..-.",
//   "@": ".--.-.",
//   "(": "-.--.",
//   ")": "-.--.-"
// }`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
// function toJs() {
//   return new Promise((resolve, reject) => {
//     try {
//       const parsedObject = JSON.parse(morse) // convert JSON string to JavaScript object

//       if (Object.keys(parsedObject).length === 0) {    // Check if the object is empty
//         reject("The object is empty")
//       } else {
//         resolve(parsedObject)
//       }
//     } catch (error) {
//       // here handle invalid JSON errors
//       reject("Invalid JSON format")
//     }
//   })
// }

// toJs()
//   .then(result => console.log("Morse JS Object:", result))
//   .catch(error => console.log("Error:", error))

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
// const parsedObject = JSON.parse(morse)
// function toMorse(parsedObject) {
//   return new Promise((resolve, reject) => {
//     const userInput = prompt("Enter a word or sentence:").toLowerCase()

//     if (!userInput) {
//       reject("No input provided")
//       return
//     }

//     const morseTranslation = []

//     for (let char of userInput) {
//       if (parsedObject.hasOwnProperty(char)) { // Check if the character exists in parsedObject
//         morseTranslation.push(parsedObject[char])// Add Morse code translation /.../
//       } else if (char !== " ") { // Ignore spaces but reject unknown characters
//         reject(`Character "${char}" is not in the Morse dictionary`)
//         return
//       }
//     }

//     resolve(morseTranslation) // Return Morse translation as an array
//   })
// }
// toMorse(parsedObject)
//   .then(result => console.log("Morse Code:", result))
//   .catch(error => console.log("Error:", error))

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// function joinWords(morseTranslation){
//     const result = morseTranslation.join('\n')// join words with line breaks
//     const element= document.createElement('p')
//     element.textContent = result
//    document.body.appendChild(element)

// }
// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

