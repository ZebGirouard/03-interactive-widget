const countElement = document.querySelector("#count");
const incrementButton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");
const themeButton = document.querySelector("#theme");

let count = 0;

function renderCount() {
  countElement.textContent = count;
}

incrementButton.addEventListener("click", () => {
  count += 1;
  renderCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  renderCount();
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderCount();
