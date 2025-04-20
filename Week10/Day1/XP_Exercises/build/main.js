"use strict";
// 1)
console.log("Hello, World");
// 2)
let a; //Type annotations (number)
let namea; //Type annotations (string)
a = 2;
namea = "Test";
console.log(`${a} and ${namea}`); //Template literals
// 3)
let id;
// 4)
const checkNumber = (value) => {
    if (value > 0) {
        return "the number is positive";
    }
    else if (value < 0) {
        return "the number is negative";
    }
    else
        return "The number is zero";
};
console.log(checkNumber(-8));
// 5)
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types
const getDetails = (name, age) => {
    let message = `Hello ${name}! You are ${age} years old`;
    return [name, age, message];
};
console.log(getDetails("Alice", 24));
const createPerson = (nameP, ageP) => {
    const newPerson = { name: nameP, age: ageP };
    return newPerson;
};
console.log(createPerson("Alice", 2));
// 7)
// Get an Element from the DOM:Use document.getElementById() to retrieve an HTML element from the DOM.
// Use Type Assertion:Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
// Access the Element’s Properties:Once cast, use the properties of the specific element type, like setting the value of an input element
// Get the element from the DOM
const inputElement = document.getElementById("myInput");
// Type assertion: Tell TypeScript this is an HTMLInputElement
const input = inputElement;
// Now you can safely access input-specific properties like `.value`
input.value;
console.log("Input value is:", input.value);
// 8)
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.
const getAction = (userRole) => {
    switch (userRole) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
};
console.log(getAction("admin"));
console.log(getAction("aaa"));
// Implementación (debe cubrir ambas firmas)
function greet(name) {
    return `Hello, ${name !== null && name !== void 0 ? name : "there"}!`;
}
console.log(greet()); // "Hello, there!"
console.log(greet("Alice")); // "Hello, Alice!"
