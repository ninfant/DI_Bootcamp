// Ex1
//Part-1
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// function sayHi(phrase, who) {
//         alert( phrase + ', ' + who )
//         }

//     setTimeout(sayHi, 2000, "Hello", "World") //  calls sayHi() after 2 second --> Hello, World
// 
// Part-2
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// function sayHi(phrase) {
//    let toAdd= document.getElementById('container')
//    let newParagraph = document.createElement("p")
//    newParagraph.textContent = phrase
//    toAdd.appendChild(newParagraph)
//         }

//     setTimeout(sayHi, 2000, "Hello World")

// Part3
// function sayHello() {
//    let toAdd= document.getElementById('container')
//    let newParagraph = document.createElement("p")
//    newParagraph.textContent = 'Hello World'
//    toAdd.appendChild(newParagraph)
//         }
// setInterval(sayHello, 2000)
// // setInterval(functionName, 2000)

// The interval will be cleared (ie. clearInterval), when the user will click on the button.

// let intervalId = setInterval(sayHello, 1000) // Start the interval
// Function to clear the interval when button is clicked
// document.getElementById("clear").addEventListener("click", Clear)
// function Clear() {   
// clearInterval(intervalId)
//     alert("Interval cleared!")
// }


// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// let count = 0 // Track number of paragraphs

// function addParagraph() {
//  let p = document.createElement("p")
//  p.textContent = `Paragraph ${count + 1}`

// append it to the <div id="container">
//     document.getElementById("container").appendChild(p)
//     count++

// Stop interval when there are 5 paragraphs
//             if (count >= 5) {
//                 clearInterval(intervalId)
//                 alert("Interval cleared! 5 paragraphs added.")
//             }
//         }
//let intervalId = setInterval(addParagraph, 1000)



// EX2
// function myMove() {
//     let animate = document.getElementById("animate")
//     let container = document.getElementById("container")
//     let position = 0 

//     let maxPosition = container.clientWidth - animate.clientWidth

//     let interval = setInterval(stopInEnd, 1) // Mover cada 1ms
//     function stopInEnd(){
//         if (position >= maxPosition) {
//             clearInterval(interval) // Detener cuando llegue al final
//         } else {
//             position += 1
//             animate.style.left = position + "px"
//         }
//     } 
// }




