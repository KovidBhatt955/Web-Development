// Get the button and paragraph elements by their IDs
const colorButton = document.getElementById("colorButton");
const greetingText = document.getElementById("greetingText");

// Add an event listener to the button
colorButton.addEventListener("click", function() {
// When the button is clicked, change the color of the greeting text
if (greetingText.style.color === "red") {
greetingText.style.color = "blue";
} else {
greetingText.style.color = "red";
}
});