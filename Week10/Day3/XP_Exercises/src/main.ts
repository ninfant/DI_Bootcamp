/** 1)
 * Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
The Person type should contain name and age, the Address type should contain street and city,
 */

// Person type
// type Person = {
//   name: string;
//   age: number;
// };
// //Address type
// type Address = {
//   street: string;
//   city: string;
// };

// // combine them into an Intersection Type
// type PersonWithAddress = Person & Address;

// // create a variable with all properties
// const person1: PersonWithAddress = {
//   name: "Alice",
//   age: 30,
//   street: "123 Main St",
//   city: "Wonderland",
// };

// // console.log(person1);

// /** 2)
//  * Create a function describeValue that accepts number | string.
//  * Use type guards to return a description based on the input type:
// "This is a number" for numbers.
// "This is a string" for strings.
//  */

// const describeValue = (value: number | string): string => {
//   if (typeof value === "string") return `this is a string`;
//   return `this is a number`;
// };

// console.log(describeValue(1));
// console.log(describeValue("Hello"));

// /** 3)
//  *Create a variable someValue of type any and cast it to a string. Then, use it as a string.
//  */

// let someValue: any = "abc";

// // type assertion (casting to string)
// let strLength: number = (someValue as string).length;

// console.log(someValue); // "abc"
// console.log(strLength); // 3

// /**
//  * 4)Create a function getFirstElement that takes an array
//  *  of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.
//  */

// const getFirstElement = (arr: (number | string)[]) => {
//   const first = arr[0];
//   return first as string;
// };
// const mixedArray = [123, "hello", 456];
// console.log(getFirstElement(mixedArray));

// /**Generic Constraints
//  * Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array).
//  * The function should log the length.
//  */

// const logLength = <T extends { length: number }>(value: T): void => {
//   console.log("Length is:", value.length);
// };

// logLength("Hello"); //  5"
// logLength([1, 2, 3]); //  3"
// logLength({ length: 42 }); //  42"

/** 5) 
 * Define a type Employee that combines Person and Job using intersection types.
 * Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.
Person type: name: string; age: number;
Job type: position: string; department: string;
Employee type should combine these.
describeEmployee should return a specific message for each type of job.
*/
// defining types
type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

//  with Intersection Type
type Employee = Person & Job;

// the function with type guards
function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager of ${emp.department}`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a Developer in ${emp.department}`;
  } else {
    return `${emp.name} works as a ${emp.position} in ${emp.department}.`;
  }
}

const emp1: Employee = {
  name: "Alice",
  age: 30,
  position: "Manager",
  department: "Engineering",
};

const emp2: Employee = {
  name: "Bob",
  age: 25,
  position: "Developer",
  department: "IT",
};

console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));

/**
 * 7)Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. Use type assertions to ensure the parameter is treated as a string for formatting.
 * The function should format the input as a string.
 */
const formatInput = <T extends { toString(): string }>(value: T): string => {
  // Use type assertion to treat value as string
  const strValue = value.toString() as string;
  return `VALUE: ${strValue}`;
};

console.log(formatInput(123));
