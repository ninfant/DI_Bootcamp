// <!-- Add a few event listener to the button. The event listeners should change the style of the button -->
// Select the button by its ID
const button = document.getElementById("jsstyle");

// Event listener to change background color when clicked
button.addEventListener("click", function () {
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.padding = "10px 20px";
  button.style.borderRadius = "5px";
  button.style.fontSize = "16px";
});

// Event listener to change the button color when hovered over
button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "green";
});

// Event listener to revert back to the original color when the mouse leaves
button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "";
});
