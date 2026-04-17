const countElement = document.querySelector("#count");
const incrementButton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");
const themeButton = document.querySelector("#theme");

let count = 0;

function renderCount() {
  countElement.textContent = count;
}

// Add the three event listeners here.
// Expected behavior:
// - increment button increases count by 1
// - reset button sets count back to 0
// - theme button toggles the `dark` class on document.body

renderCount();
