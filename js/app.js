const countDisplay = document.getElementById("count");
const resultDisplay = document.getElementById("result");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const resetButton = document.getElementById("reset");

let count = 1;

function getFizzBuzzText(value) {
  if (value % 15 === 0) {
    return "FizzBuzz";
  }

  if (value % 3 === 0) {
    return "Fizz";
  }

  if (value % 5 === 0) {
    return "Buzz";
  }

  return String(value);
}

function render() {
  countDisplay.textContent = count;
  resultDisplay.textContent = getFizzBuzzText(count);
  prevButton.disabled = count === 1;
  resetButton.disabled = count === 1;
}

prevButton.addEventListener("click", () => {
  count -= 1;
  render();
});

nextButton.addEventListener("click", () => {
  count += 1;
  render();
});

resetButton.addEventListener("click", () => {
  count = 1;
  render();
});

render();
