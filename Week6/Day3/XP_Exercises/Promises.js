// ex1
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// // 
// function compareToTen(num){
//     let newPromise = new Promise(function (resolve, reject) {
//     if (num <= 10) {
//         resolve("This is the right number");
//     } else {
//         reject("wrong number");
//     }
// });
// return newPromise
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// wrong number

//   compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   This is the right number


// ex2
// Exercise 2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success');
//   }, 4000);
// })
// .then(result => console.log(result)) // Handles the resolved value and prints "Success" after 4 seconds
// .catch(error => console.log(error)) // it's not triggered here since there is no rejection

// ex3
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// const promise = Promise.resolve(3).then(result => console.log(result)) 
//creates a promise that immediately resolves with the value 3.
 // then() is called with the resolved value (3).

// const promise1 = Promise.reject("Boo!").catch(error => console.log(error))