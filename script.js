const countElement = document.querySelector("#count");
const stepElements = document.querySelectorAll("#steps li");
const incrementButton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");
const themeButton = document.querySelector("#theme");

let currentStep = 0;

function renderCount() {
  countElement.textContent = `Step ${currentStep + 1} of ${stepElements.length}`;
}

function renderSteps() {
  stepElements.forEach((stepElement, index) => {
    stepElement.classList.toggle("active", index === currentStep);
  });
}

// Add the three event listeners here.
// Expected behavior:
// - next step moves the active state to the next list item
// - reset returns to the first step
// - theme button toggles the `dark` class on document.body

renderCount();
renderSteps();
