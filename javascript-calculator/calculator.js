let runningTotal = 0;
// waiting for user input;
let buffer = "0";
// we need to keep track of what the user is typing in previously
let previousOperator = null;
const screen = document.querySelector(".screen");

// bind up event listener
document
  .querySelector(".calc-buttons")
  .addEventListener("click", function(event) {
    console.log(event.target);
    buttonClick(event.target.innerText);
  });

function buttonClick(value) {
  console.log(value);
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

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;
    case "=":
      console.log("here");
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      console.log("here is what");
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  console.log("previousOperation");
  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function rerender() {
  screen.innerText = buffer;
}
