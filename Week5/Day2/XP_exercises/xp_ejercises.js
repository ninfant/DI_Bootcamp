// Ex1
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne()
// // #1 output a = 3

// // #1.1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne()
// // output: This results in a TypeError at runtime 
// //  the variable a is declared using const, meaning its value cannot be reassigned after initialization,
// //since JavaScript does not allow modifying a constant variable

// #2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// // output: 0 
// // output: 5 

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared with const instead of let ?:
// // output: 0 
// // a can not change to 5, value cannot be reassigned after initialization

//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour(); // Assigns "hello" to the global variable 'a'
// funcFive(); // Alerts: "inside the funcFive function hello"

// #4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared with const instead of let ?
// outuput: a = test
// When the function executes, it only sees the local scope a, which is "test", the global
// value a = 1 is not accessible inside.

//#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// output: in the if block a =5, outside of the if block a =2

// #5.2 What will happen if the variable is declared with const instead of let ?
// The a inside the if block is a new block-scoped variable, separate from the global const a = 2


// EX2 Ternary Operator
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// const winBattle = () => true
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
// const experiencePoints = winBattle() ? 10 : 1
// console.log(experiencePoints)

// #EX3 Is It A String ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// The parentheses around value are optional when there is only one parameter in an arrow function.
// const isString = value => typeof value === 'string'

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
//false

// EX4
// Exercise 4 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// const functSum = (a,b) => a + b
// console.log(functSum(3,6))

//EX5
// Exercise 5 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
// console.log(Convertweight(1))

// function Convertweight(weight){
//    let convertion = weight*1000
//     return convertion
// }
// console.log(Convertweight(1))

// Then, use function expression and invoke it.
// const Convertweight = function(weight) {
//     let conversion = weight * 1000
//     return conversion
// }

// console.log(Convertweight(1))

// Write in a one line comment, the difference between function declaration and function expression.

//   Function Declaration: Declared with the function keyword at the top level,Hoisted can be used before its declaration.
//  Function Expression: Stored in a variable (can be const, let, or var), Not hoisted cannot be used before its definition.

// Finally, use a one line arrow function and invoke it.
// const Convertweight = weight => weight * 1000


// EX 6 Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
// (function (numChildren, partnerName, location, jobTitle) {
//     const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`
    
//     const paragraph = document.createElement("p") // Create a new paragraph element and append it to the body
//     paragraph.textContent = message
//     document.body.appendChild(paragraph)
// })
// (2, "Jose", "Israel", "Software Engineer") // this is to call the function with those arguments


// EX 7 : Welcome
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
// (function (username){
//     const newDiv= document.createElement('div')
//     const navVar = document.getElementById('user')
//     newDiv.textContent = username
//     newDiv.style.color = "red"
//     newDiv.style.fontSize = "20px"
//     newDiv.style.fontWeight = "bold"
//     const img = document.createElement("img")
//     img.src = "https://www.mycyberuniverse.com/images/webp/articles/Milena/how-save-memoji-as-png/thumbnail.webp"
//     img.alt = "Profile picture"
//     img.width = 200
//     img.style.border = "2px solid red"
//     newDiv.appendChild(img)
//     navVar.append(newDiv)
    
// })
// ("Lily")

// EX8 Part1
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// function makeJuice(size_drink){
//     function addIngredients(first_ingredient, second_ingredient, third_ingredient){
//          let myDiv= document.createElement('div')
//          myDiv.textContent = `The client wants a ${size_drink} juice, containing ${first_ingredient}, ${second_ingredient} and ${third_ingredient}`
//          document.body.appendChild(myDiv);
//     }
//     addIngredients("banana", "sugar", "milk")
// }
// makeJuice("Medium")

// Part2
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// function makeJuice(size_drink){ //outer function
//     let ingredients=[]
//     function addIngredients(first_ingredient, second_ingredient, third_ingredient){ //inner function
//          ingredients.push(first_ingredient, second_ingredient, third_ingredient)
//     }
//     function displayJuice(){ // inner function
//         let p= document.createElement('p')
//         p.textContent = `The client wants a ${size_drink} juice, containing ${ingredients.join(", ")}`
//          document.body.appendChild(p);
//     }
//     addIngredients("banana", "sugar", "milk")
//     addIngredients("mango", "pinaple", "grapes")
//     displayJuice()
// }
// makeJuice("Medium")