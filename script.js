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

function goToNextStep() {
  if (currentStep < stepElements.length - 1) {
    currentStep += 1;
  }

  renderCount();
  renderSteps();
}

function resetChecklist() {
  currentStep = 0;
  renderCount();
  renderSteps();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", () => {
  toggleTheme();
});

// Use the same pattern as the example above.
// Which button should call `goToNextStep`?
// Which button should call `resetChecklist`?

renderCount();
renderSteps();
