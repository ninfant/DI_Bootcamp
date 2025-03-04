// ex1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

//  colors.map((value,index) => console.log(`${index + 1}# choice is ${value}`))

// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

// const ifName= colors.some((value) => (value == 'Violet'))
// console.log(ifName ? "Yeah" : "No...")

// ForMeNote: ifName will be just true or false as this is what some() method return


// EX2
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
// const ordinal = ["th", "st", "nd", "rd"]

// colors.map((color, index) => {
//     let suffix = (index + 1 === 1) ? ordinal[1] :
//                  (index + 1 === 2) ? ordinal[2] :
//                  (index + 1 === 3) ? ordinal[3] :
//                  ordinal[0]

//     console.log(`${index + 1}${suffix} choice is ${color}`)
// })

// EX3
// Analyze these pieces of code before executing them. What will be the outputs ?
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// output: ['bread', "carrot", "potato", 'chicken', "apple", "orange"]


// const country = "USA";
// console.log([...country]);
// output: ['U', 'S', 'A']


// let newArray = [...[,,]];
// console.log(newArray);
// outout:
// console.log([,,]) outputs empty slots ([ <2 empty slots> ])
// console.log([...[, ,]]) outputs [undefined, undefined] because the spread operator replaces empty slots with undefined


// EX4
// Using this array:
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// const welcomeStudents = users.map(valu =>`Hello ${valu.firstName}`)
// console.log(welcomeStudents)
// //  

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
// let role = users.filter(valu => valu.role == 'Full Stack Resident')
// console.log(role)

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
// specificRole = users.filter(valu => valu.role == 'Full Stack Resident')
// const studentsDetails = specificRole.map(valu => valu.lastName)
// console.log(studentsDetails)


// Using this array 
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.
// let result = epic.reduce((acc,val)=> acc + " " + val )
// console.log(result)

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// let passedCourse= students.filter((valu) => valu.isPassed == true)
// console.log(passedCourse)

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
// let passedCourse= students.filter((valu) => valu.isPassed == true)
// passedCourse.forEach(valu => console.log(`Good job ${valu.name}, you passed the course in ${valu.course}`)

// 