let runningTotal = 0;
// waiting for user input;
let buffer = "0";
// we need to keep track of what the user is typing in previously
let previousOperator;
const screen = document.querySelector(".screen");

// bind up event listener
document
  .querySelector(".calc-buttons")
  .addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (buffer === 0) {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {}

function rerender() {
  screen.innerText = buffer;
}
