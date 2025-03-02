// Ex1
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// function displayNumbersDivisible(){
//     let sum = 0
//     for (let i = 0; i < 500; i++) {
//         if (i % 23 == 0){
//             console.log(i)
//             sum+= i
//         }
       
//     }
//     console.log(`The sum is ${sum}`)
// }
// displayNumbersDivisible()

// function displayNumbersDivisible(divisor){
//     let sum = 0
//     for (let i = 0; i < 500; i++) {
//         if (i % divisor == 0){
//             console.log(i)
//             sum+= i
//         }
       
//     }
//     console.log(`The sum is ${sum}`)
// }

// displayNumbersDivisible(23)
// displayNumbersDivisible(45)
//________________________________________________________________________________

// Ex2
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// };

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// };

// const shoppingList = ["banana", "orange", "apple"]

// function myBill() {
//     let total = 0
//     for (let item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             total += prices[item]
//         }
//     }
//     return total
// }

// console.log(myBill())
//________________________________________________________________________________

// Ex3
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
// 4. To illustrate:
// changeEnough(4.25, [25, 20, 5, 0])
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
    
// function changeEnough(itemPrice, amountOfChange) {
  // amountOfChange = [quarters, dimes, nickels, pennies]
//   var quarters = amountOfChange[0]
//   var dimes = amountOfChange[1]
//   var nickels = amountOfChange[2]
//   var pennies = amountOfChange[3]

//   var total = quarters * 0.25 + dimes * 0.10 + nickels * 0.05 + pennies * 0.01

//   if (total >= itemPrice) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]))
// console.log(changeEnough(14.11, [2, 100, 0, 0]))

//________________________________________________________________________________
// EX4
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// Call the function totalVacationCost()

// function hotelCost() {
//   let nights
  // this is to ask the user for the number of nights 
    // until a valid number is entered
//   while (true) {
//     nights = prompt("How many nights would you like to stay at the hotel?");
//     if (nights !== null && nights !== "" && !isNaN(nights)) {
//       nights = Number(nights)
//       break
//     }
//     alert("Please enter a valid number of nights.")
//   }
 
//   return nights * 140
// }

// function planeRideCost() {
//   let destination;
  // to ask the user for their destination until a valid string is entered
//   while (true) {
//     destination = prompt("What is your destination?")
//     if (destination !== null && destination.trim() !== "" && isNaN(destination)) {
//       destination = destination.trim()
//       break;
//     }
//     alert("Please enter a valid destination.")
//   }
  // to determine the plane ride cost based on the destination
//   if (destination.toLowerCase() === "london") {
//     return 183
//   } else if (destination.toLowerCase() === "paris") {
//     return 220
//   } else {
//     return 300
//   }
// }

// function rentalCarCost() {
//   let days
  // to ask the user for the number of days to rent the car until a valid number is entered
//   while (true) {
//     days = prompt("How many days would you like to rent the car?")
//     if (days !== null && days !== "" && !isNaN(days)) {
//       days = Number(days)
//       break;
//     }
//     alert("Please enter a valid number of days.")
//   }
  // the car rental costs $40 per day
//   let cost = days * 40
//   if (days > 10) {   // i have to apply a 5% discount if the rental is for more than 10 days

//     cost = cost * 0.95
//   }
//   return cost;
// }

// function totalVacationCost() {
//   const hotel = hotelCost()
//   const plane = planeRideCost()
//   const car = rentalCarCost()
//   const total = hotel + plane + car

//   return `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. Total vacation cost: $${total}`
// }

// console.log(totalVacationCost())
//________________________________________________________________________________
// Ex5
// const container = document.getElementById("container")
// console.log(container)

// const lists = document.querySelectorAll(".list li") // Change the name “Pete” to “Richard”.
// lists[1].textContent = "Richard"

// const secondList = document.querySelectorAll(".list")[1] // Delete the second <li> of the second <ul>
// secondList.removeChild(secondList.children[1])

// document.querySelectorAll(".list").forEach((ul) => {// Change the first <li> of each <ul> to your name
//   ul.firstElementChild.textContent = "Noilsa"
// })


// document.querySelectorAll(".list").forEach((ul) => {// Add a class called student_list to both of the <ul>'s
//   ul.classList.add("student_list")
// })

// Add the classes university and attendance to the first <ul>.
// document.querySelector(".list") selects only the first <ul>.
// document.querySelector(".list").classList.add("university", "attendance");

// Add a “light blue” background color and some padding to the <div>.
// container.style.backgroundColor = "lightblue";
// container.style.padding = "10px";

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Error: Dan is the last child of the second <ul>
// document.querySelectorAll(".list li").forEach((li) => {
//   if (li.textContent.trim() === "Dan") {
//     li.style.display = "none";
//   }
// });

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Error: Richard is the second child of the first <ul>
// document.querySelector(".list li:last-child").style.border = "2px solid black";

// Change the font size of the whole body
// document.body.style.fontSize = "18px";

//________________________________________________________________________________


//Ex6
// select the <div> element by its original id "navBar"
// const divElement = document.getElementById("navBar")

// change its id attribute to "socialNetworkNavigation"
// divElement.setAttribute("id", "socialNetworkNavigation")

// select the unordered list (<ul>) within the updated div
// const ulElement = divElement.querySelector("ul")

// create a new <li> element
// const newLi = document.createElement("li")

// create a new text node with the content "Logout"
// const logoutText = document.createTextNode("Logout")

// append the text node to the new <li> element
// newLi.appendChild(logoutText)

// append the new <li> element to the <ul>
// ulElement.appendChild(newLi)

// retrieve the first and last <li> elements using firstElementChild and lastElementChild
// const firstLi = ulElement.firstElementChild
// const lastLi = ulElement.lastElementChild

// display the text content of the first and last <li> elements
// console.log("First list item:", firstLi.textContent)
// console.log("Last list item:", lastLi.textContent)
//________________________________________________________________________________

//Ex7

// const allBooks = [// the array of book objects
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
//     alreadyRead: true
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
//     alreadyRead: false
//   }
// ]


// const listBooksSection = document.querySelector(".listBooks")// Select the section with the class "listBooks"

// for (let i = 0; i < allBooks.length; i++) {// Loop through the allBooks array using a classic for loop
//   const book = allBooks[i];
//   const bookDiv = document.createElement("div")  // Create a div to hold each book's details
//   const bookDetails = document.createElement("p") // Create a paragraph for the title and author
//   bookDetails.textContent = `${book.title} written by ${book.author}`

//   if (book.alreadyRead) {// If the book has already been read, set the text color to red
//     bookDetails.style.color = "red"
//   }
//   const bookImage = document.createElement("img")// Create an image element for the book cover
//   bookImage.setAttribute("src", book.image)
//   bookImage.style.width = "100px"
//   bookDiv.appendChild(bookImage)  // Append the image and the details paragraph to the book div
//   bookDiv.appendChild(bookDetails)


//   listBooksSection.appendChild(bookDiv)  // Append the book div to the section
// }
