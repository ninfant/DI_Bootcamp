// 1)
console.log("Hello, World");

// 2)
let a: number; //Type annotations (number)
let namea: string; //Type annotations (string)

a = 2;
namea = "Test";
console.log(`${a} and ${namea}`); //Template literals

// 3)
let id: string | number;

// 4)
const checkNumber = (value: number): string => {
  if (value > 0) {
    return "the number is positive";
  } else if (value < 0) {
    return "the number is negative";
  } else return "The number is zero";
};
console.log(checkNumber(-8));

// 5)
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types
const getDetails = (name: string, age: number): [string, number, string] => {
  let message: string = `Hello ${name}! You are ${age} years old`;
  return [name, age, message];
};

console.log(getDetails("Alice", 24));

// 6)
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).
// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.
type Person = {
  name: string;
  age: number;
};

const createPerson = (nameP: string, ageP: number): Person => {
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
const input = inputElement as HTMLInputElement;

// Now you can safely access input-specific properties like `.value`
input.value;
console.log("Input value is:", input.value);

// 8)
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.
const getAction = (userRole: string): string => {
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

// 9)
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

// Sobrecargas: Firmas posibles de la función
function greet(): string;
function greet(name: string): string;

// Implementación (debe cubrir ambas firmas)
function greet(name?: string): string {
  return `Hello, ${name ?? "there"}!`;
}

console.log(greet()); // "Hello, there!"
console.log(greet("Alice")); // "Hello, Alice!"
