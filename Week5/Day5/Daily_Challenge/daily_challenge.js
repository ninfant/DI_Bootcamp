let myForm = document.getElementById('userForm')

myForm.addEventListener('submit', sendJsonString)
function sendJsonString(e){
    e.preventDefault()
    
    let name = document.getElementById('name').value.trim()
    let lastname = document.getElementById('lastName').value.trim()

    // Create an object with user data
    const userData = { name, lastname }

    // Display JSON inside the <div>
    const jsonString = JSON.stringify(userData, null, 2)
    document.getElementById("output").textContent = jsonString

    // Clear the form fields after submission
    document.getElementById("userForm").reset()


}