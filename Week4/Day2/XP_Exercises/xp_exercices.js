// # #Ex1
// #Part1
// const people = ["Greg", "Mary", "Devon", "James"]
// Write code to remove “Greg” from the people array.
// indexToRemove=0
// people.splice(indexToRemove,1)
// people.splice(0,1)

// Write code to replace “James” to “Jason”
// people.splice(2,1,"Jason")

//Write code to add your name to the end of the people array.
// people.push("Noilsa")

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// let maryIndex = people.indexOf("Mary");
// console.log(maryIndex)
// Note: if Mary was not in the array, will return -1

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// let newSlice= people.slice(0,3)
// console.log(people)
// console.log(newSlice)

// Write code that gives the index of “Foo”. Why does it return -1 ?
// let FooIndex = people.indexOf("Foo")
// console.log(FooIndex)
// Foo is not in the array so will return -1

//Create a variable called last which value is the last element of the array.
//  Hint: What is the relationship between the index of the last element in the array and the length of the array?
// const last = people[people.length - 1]
// console.log(last)
// arrays are zero-indexed (first element is at index 0)
//The length starts counting at 1 (not at 0 like the index )

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
//     if (people[i]=== 'Devon'){
//         break
//     }
// }
// ______________________________________________________________________
// Ex2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five favorite colors.
// const colors= ["Blue", "Pink", "Green", "Red", "Black"]

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
// const suffixes= ["st", "nd", "rd", "th", "th"]
// for (let i = 0; i < colors.length; i++){
//     console.log(`My #${i+1}${suffixes[i]} choice is ${colors[i]}`)
// }

// ______________________________________________________________________
// Ex3 Repeat The Question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// let answer =prompt("Enter a number")
//  console.log(`You entered: ${answer}`)
//  console.log(`Data type: ${typeof answer}`)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// 
// let number = Number(prompt("Enter a number:"))

// while (isNaN(number) || number < 10) {
//   number = Number(prompt("Please enter a number greater than or equal to 10:"))
// }
// ______________________________________________________________________


// Ex4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: { // nested structure
//         firstFloor: 3,   // to access here: building.numberOfAptByFloor.firstFloor
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// Console.log the number of floors in the building.
// console.log(building.numberOfFloors)


// Console.log how many apartments are on the floors 1 and 3.
// let totalapart = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
// console.log(totalapart)


// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(`The name is ${building.nameOfTenants[1]} and the number of apartments is ${building.numberOfRoomsAndRent.dan[0]}`)


// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.
// let davidSaraRent=building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1]
// if(davidSaraRent >= building.numberOfRoomsAndRent.dan[1]){
//    building.numberOfRoomsAndRent.dan[1]=1200
// }
// console.log(`Dan’s rent now is  ${building.numberOfRoomsAndRent.dan[1]}`)
// ______________________________________________________________________

//Ex5 : Family
// Create an object called family with a few key value pairs.
// const family = {
//     lastName: "Infante",
//     members: 4,
//     father: "John",
//     mother: "Emma",
//     children: ["Alice", "Bob"],
//     pet: {
//         type: "dog",
//         name: "Buddy"
//     }
// }

// Using a for in loop, console.log the keys of the object.
// for (let k in family) {
//     console.log(k)
// }
// Using a for in loop, console.log the values of the object.
// for (let k in family) {
//     console.log(family[k])
// }
// ______________________________________________________________________
// Ex6 : Rudolf

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
// const myArray = Object.keys(details);
// let sentence = ''
// for (let i = 0; i < myArray.length; i++) {
//   sentence += myArray[i] + ' ' + details[myArray[i]] + ' '
// }
// console.log(sentence.trim())
// ______________________________________________________________________
// Ex7 : Secret Group
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// let firstLetters = [];
// for (let i = 0; i < names.length; i++) {
//     firstLetters.push(names[i][0])
// }
// firstLetters.sort()
// const secretName = firstLetters.join("")
// console.log(`Secret society name: ${secretName}`)