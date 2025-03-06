
const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const listTasks = document.querySelector(".listTasks")


function addTask(event) {
    event.preventDefault()

    const taskText = taskInput.value.trim()
    if (taskText === "")
        {
            alert("The field is empty")
            return
        }

    // Create task container (div)
    const taskElement = document.createElement("div")
    taskElement.classList.add("task")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

   
    const label = document.createElement("label") // Create label that will have the task text from the input
    label.textContent = taskText

    // Create delete button with Font Awesome "X" icon
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")

    const icon = document.createElement("i")
    icon.classList.add("fa-solid", "fa-xmark")
    deleteBtn.appendChild(icon)

   
    checkbox.addEventListener("change", () => { // Add event listener to checkbox (cross out task when checked)
        if (checkbox.checked) {
            label.classList.add("completed")
        } else {
            label.classList.remove("completed")
        }
    })

    // remove task
    deleteBtn.addEventListener("click", deleteButton)
    function deleteButton()
    {
        listTasks.removeChild(taskElement)
    }

  
    taskElement.appendChild(checkbox)
    taskElement.appendChild(label)
    taskElement.appendChild(deleteBtn)

    
    listTasks.appendChild(taskElement)// Add task to the list

   
    taskInput.value = "" // Clear the input field
}


taskForm.addEventListener("submit", addTask)// Add event listener to form
