// const numbers = [10,11,12,15,20];
// Using the for each method, display only the even numbers in the array

// numbers.forEach((val) => {if (val%2 === 0) console.log(val)})




// ********* using map() method**************************************

// Anayse this code before executing it. What will be the output ?

// myArr = [10,20,30,40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });
// console.log(newArr)


// const firstArr = [1, 4, 9, 16];

// pass a function to map
// const secondArr = firstArr.map((value, index) => value * 2);
// // array passed : firstArr
// // transformation passed : value * 2

// console.log(secondArr);
// // expected output: [2, 8, 18, 32]


// Example:
// const firstArr1 = [1, 4, 9, 16];

// const secondArr1 = firstArr1.map((value, index, arr) => {
//     console.log(value); // each element
//     console.log(index); // each index
//     console.log(arr); // the firstArr (logged 4 times)
//     return value * index;
// });

// console.log(secondArr1);
// //expected output : [ 0, 4, 18, 48 ]


// *************using filtrer() method*************************************
// example: 
// Filtrar los dias de la semana con la letra e
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// let eday = days.filter(day => day.includes('e'))

// console.log (eday)



// **************** using  reduce() method**************************************

// const arr = [1, 4, 9, 16];

// let sum = arr.reduce((acc, val) => {
//   console.log(`acc: ${acc}`)
//   console.log(`val: ${val}`)
//   console.log(`acc + val: ${acc + val}`);
//   return acc + val;
// });

// console.log(sum)

// const arr = [1, 4, 9, 16];
// let product = arr.reduce((acc, val) => acc * val)
// console.log(product) // ouput 576       (1*4*9*16 = 576)

// Example2 
// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.
// The output should be 85

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
];

// let calories = party.reduce((acc, val) => {
//   return val.desert !== 'Apple Pie' ? acc + val.calories : acc;
// }, 0); // Set initial value to 0 as the syntax can have a initial
// syntax to use reduce have  arr.reduce(callback function, initValue);

let cal = party.reduce((acc, val) => {
   if(val.desert == 'Apple Pie'){
    return acc
   }else{
    return acc + val.calories
   }}, 0
  )
console.log(cal); // Output: 85



// ********* using Spread Operator *********************

// Anayse this code before executing it. What will be the output ?

// let prices = [12, 20, 18];
// let newPriceArray = [...prices];
// console.log(newPriceArray);
// // output: [12, 20, 18]


// let alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);
// // output: ['A', 'B', 'C', 'D', 'E']