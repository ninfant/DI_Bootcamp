// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted.
//  Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the 
// button should change the story currently displayed (but keep the values 
// entered by the user). The user could click the button at least three times
//  and get a new story. Display the stories randomly.

// const form = document.getElementById("libform")
// let shuffleButton = document.createElement("button")
//     shuffleButton.textContent ='Shuffle'
//     form.appendChild(shuffleButton)

// form.addEventListener("submit", afterSubmit)

// function afterSubmit(event) {
//     event.preventDefault()
//     const noun = document.getElementById("noun")
//     const adjective = document.getElementById("adjective")
//     const person = document.getElementById("person")
//     const verb = document.getElementById("verb")
//     const place = document.getElementById("place")

    // // all inputs elements in a array
    // const fields = [noun, adjective, person, verb, place]
    // let isValid = true

    // let existingError = document.getElementById("error-message")
    // // validation
    // fields.forEach(field => {
    //     if (field.value.trim() === "") { 
    //         field.style.border = "2px solid red"// Resaltar el campo vacío
    //         isValid = false
    //     } else {
    //         field.style.border = "1px solid #ccc" // Restaurar el borde
    //     }
    // })

    // if (!isValid) {
    //     if (!existingError) {
    //         let errorMessage = document.createElement("p")
    //         errorMessage.textContent = "Please fill in all fields!"
    //         errorMessage.style.color = "red"
    //         errorMessage.id = "error-message" // Asigno un ID para evitar duplicados
    //         form.appendChild(errorMessage)
    //     }
    //     return
    // }

    // if validation is OK, to remove error message if exist
    // if (existingError) {
    //     existingError.remove()
    // }

    // the story to tell
    // const story = `One day, ${person.value} went to ${place.value} thinking about a ${adjective.value} ${noun.value} and started to ${verb.value}!`
    // to show it in the html
//     document.getElementById("story").textContent = story
    
//     const story1 = `If you like the name ${person.value} and visited ${place.value} you probably are a ${adjective.value} person and started to ${verb.value} a ${noun.value}!`
//     const story2 = `Legend says that ${person.value} once traveled to ${place.value} and discovered a ${adjective.value} ${noun.value}. Since then, they always ${verb.value} whenever they return!`
//     const story3= `While exploring ${place.value}, ${person.value} stumbled upon a ${adjective.value} ${noun.value}. Without hesitation, they decided to ${verb.value}, changing their life forever!`
//     const storyArray =[story1, story2, story3]  
//     shuffleButton.addEventListener('click', shuffleButtonFunction)

//     function shuffleButtonFunction(event){
//           event.preventDefault()
//           const randomIndex = Math.floor(Math.random() * storyArray.length)
//           document.getElementById("story").textContent = storyArray[randomIndex]
//     }

// }


