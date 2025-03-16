// app.js

const lodash = require("lodash"); // import the lodash package
const math = require("./math"); // Import our custom math module

const sumResult = math.add(10, 5);
const multiplicationResult = math.multiply(3, 4);

const averageResult = lodash.mean([sumResult, multiplicationResult]);
// myNotes: La función _.mean de lodash calcula la media aritmética de los elementos de un array de números. Es decir, suma todos los números y luego divide el total entre la cantidad de elementos

console.log("Addition result:", sumResult);
console.log("Multiplication result:", multiplicationResult);
console.log("Average of results:", averageResult); // Expected output: 13.5
