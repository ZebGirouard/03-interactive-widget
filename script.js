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

// Which button should move the active step forward?
// Which button should send the checklist back to the beginning?
// Which button should change the page theme?

renderCount();
renderSteps();
