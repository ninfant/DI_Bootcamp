// ex1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// ex2
// function displayStudentInfo(objUser){
//     console.log( ` Your full name is ${objUser.first} ${objUser.last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

// ex3
// Using this object
//  const users = { user1: 18273, user2: 92833, user3: 90315 }
// Using methods taught in class, turn the users object into an array:
// console.log(Object.entries(users))

// output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const updatedUsersArray = newObject.map(([key, value]) => [key, value * 2])
// console.log(updatedUsersArray)

// ex4
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

// output: object

//ex5
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?

// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name); // Correctly calling the parent constructor
//     this.size = size; // Can now safely use `this`
//   }
// }


// EX6
// Evaluate these (ie True or False)

// [2] === [2]  //output: False  arrays are objects, and objects are compared by reference, not by value.
// {} === {}  // output:  False

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)  //output: 4
// console.log(object3.number)   //output: 4
// console.log(object4.number)   //output: 5
// Since object1, object2, and object3 all reference the same object, changing object1.number 
// will affect object2.number and object3.number as well
// object4.number remains unchanged because it refers to a different object

// parent class Animal
// class Animal {
//   constructor(name, type, color) {
//     this.name = name
//     this.type = type
//     this.color = color
//   }
// }

// child class Mammal extends Animal
// class Mammal extends Animal {
  // method to return details of the animal and the sound it makes
//   sound(noise) {
//     return `${this.name} is a ${this.color} ${this.type} and it makes a "${noise}" sound`
//   }
// }

// const farmerCow = new Mammal("Dina", "cow", "black")
// console.log(farmerCow.sound("moos"))
