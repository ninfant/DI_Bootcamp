import { people } from "../exercise2/data.js";
// Advanced Module Usage Using ES6 Module Syntax
// MyNotes: if i import from a defaul is people without the  { } like this: import people from './data.js';
//MyNotes:in the package.json i had to changed  and write "type": "module",
//so I can use ES6 module syntax.

// Create another file named app.js.
// In app.js, import the array of person objects from the data.js module.
// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js.
// Run app.js and confirm that the average age is correctly calculated and displayed.

function printAverageAge(myPeople) {
  if (!myPeople || myPeople.length === 0) {
    console.log("No persons to calculate average age.");
    return;
  }

  const totalAge = myPeople.reduce((acc, person) => acc + person.age, 0);
  const averageAge = totalAge / myPeople.length;
  console.log(`Average age: ${averageAge}`);
}

printAverageAge(people);
