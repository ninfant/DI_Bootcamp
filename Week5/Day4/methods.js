// Exercise

// Use the methods above to :

// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".
// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }
// myObj.entries(myObj).forEach((attrib, index) => {
//     console.log(`The x${index} key is: ${attrib[0]}.
//         The x${index} value is: ${attrib[1]}. `)
    
// });



// // Dates
// let date = document.getElementById('lol');
// date.addEventListener("change",function(event){
//     let date = new Date(event.target.value);
//     console.log(date);
//   }
// );

// let now =new Date()
// console.log(now)
// outuput: Wed Mar 05 2025 11:47:14 GMT+0200 (Israel Standard Time)

// let dateString = now.toString();
// console.log('toString',dateString);


// let day = now.getDay();
// console.log('getDay',day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
console.log('dayNames',dayName);