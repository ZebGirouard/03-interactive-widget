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

incrementButton.addEventListener("click", () => {
  currentStep = Math.min(currentStep + 1, stepElements.length - 1);
  renderCount();
  renderSteps();
});

resetButton.addEventListener("click", () => {
  currentStep = 0;
  renderCount();
  renderSteps();
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderCount();
renderSteps();
