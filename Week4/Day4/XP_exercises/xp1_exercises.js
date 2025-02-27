// ex1
// Using a DOM property, retrieve the h1 and console.log it.
// const  h1Element = document.getElementsByTagName('h1')
// console.log(h1Element)

// Using DOM methods, remove the last paragraph in the <article> tag.
// const article = document.querySelector("article")
// const childElem = document.getElementsByTagName("p")

// if (childElem.length > 0) {
//   article.removeChild(childElem[childElem.length - 1])
// }

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
  // Select the <h2> element
//     const h2Element = document.querySelector("h2")

//     h2Element.addEventListener("click", changeBackgroundColor)


//         function changeBackgroundColor() {
//     h2Element.style.backgroundColor = "red"
// }

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

//     const h3Element = document.querySelector("h3")

//     h3Element.addEventListener("click",changeDispalyNone )

//     function changeDispalyNone(e) {
//         e.target.style.display = "None"
// }

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const btn = document.getElementById('botn1')
// const pElements =document.getElementsByTagName('p')
    // console.log(pElements)
//     btn.addEventListener("click", makeTextBold)

//     function makeTextBold(e) {
//         for (let i = 0; i < pElements.length; i++) {
//             pElements[i].style.fontWeight = 'bold'
//         }
//     }

// When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// const h1Element =document.getElementsByTagName("h1")[0]
// h1Element.addEventListener("mouseover", setFontSize)
// function setFontSize(e) {
//        e.target.style.fontSize = `${Math.floor(Math.random() * 100) + 1}px`
//     }

// Ex2
// Retrieve the form and console.log it.
// const formElement=document.getElementsByTagName("form")
// console.log(formElement)
// Retrieve the inputs by their id and console.log them.
// const firstInput=document.getElementById('fname')
// console.log(firstInput)
// const secondInput=document.getElementById('lname')
// console.log(secondInput)
// Retrieve the inputs by their name attribute and console.log them.
// const firstNameInputs= document.getElementsByName('firstname')
// const secondNameInputs= document.getElementsByName('lastname')
// console.log(firstNameInputs[0])
// console.log(secondNameInputs[0])

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// When you click on a “Submit” button, the default action is to submit the form data to the server
// You can prevent the default form submission action using JavaScript to implement custom actions such as form validation before the form data is sent to the server. This is often done using the event.preventDefault() method.
// Select the form and the unordered list
// const form = document.querySelector("form")
// const usersAnswer = document.querySelector(".usersAnswer")

// form.addEventListener("submit", afterSubmit) 
  // prevent the default form submission behavior (page reload)
//   function afterSubmit(event)
    // {
    // event.preventDefault()
    // const firstName = document.getElementById("fname").value.trim()
    // const lastName = document.getElementById("lname").value.trim()
    // if (firstName === "" || lastName === "") {
    //     console.log("Please fill in both fields.")
    //     return
    // }

        // create an <li> for the first name
        // const liFirst = document.createElement("li")
        // liFirst.textContent = firstName
        // usersAnswer.appendChild(liFirst)

        // create an <li> for the last name
    //     const liLast = document.createElement("li")
    //     liLast.textContent = lastName
    //     usersAnswer.appendChild(liLast)
    // }

// Ex3
// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved 
// onto the paragraph), and the function returnItemsToDefault() 
// on mouseout (ie. when the mouse pointer is moved out of the paragraph). 


// let allBoldItems

// function getBoldItems()
// {
// allBoldItems = document.querySelectorAll('p strong')
// return allBoldItems
// }

// function highlight() {

//  const boldItems = getBoldItems()// here i called the function getBoldItems()

//   for (let i = 0; i < boldItems.length; i++) {
//     boldItems[i].style.color = 'blue'
//   }
// }

// function returnItemsToDefault() {
// const boldItems = getBoldItems()// here i called the function getBoldItems()

//   for (let i = 0; i < boldItems.length; i++) {
//     boldItems[i].style.color = 'black'
//   }
// }

// const p = document.querySelector('p')
// p.addEventListener('mouseover', highlight)
// p.addEventListener('mouseout', returnItemsToDefault)

//Ex4
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

// document.getElementById("MyForm").addEventListener("submit", function(event) {
//     event.preventDefault() // Evita que la página se recargue

    //convertir el valor del radio de string a int 
//     let radius = parseFloat(document.getElementById("radius").value.trim())

//     if (isNaN(radius) || radius <= 0) {
//         alert("Please enter a valid positive number for the radius.")
//         return;
//     }
//     let volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

//     document.getElementById("volume").value = volume.toFixed(2) // Redondear a 2 decimales
// })

