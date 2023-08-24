const updateScreen = function (value) {
  const displayValue = value.toString();
  $(".screen").html(displayValue.substring(0, 10));
};

const isNumber = function (value) {
  return !isNaN(value);
};

const isOperator = function (value) {
  return value === "/" || value === "*" || value === "+" || value === "-";
};

const operate = function (a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
};

$(document).ready(function () {
  let result = 0;
  let prevEntry = 0;
  let operation = null;
  let currentEntry = "0";
  updateScreen(result);

  $(".button").click(function (e) {
    // Khi click vào .button nào, get ra innerHTML của .button đó
    const btnPressed = $(this).html();
    console.log(btnPressed);

    if (btnPressed === "C") {
      result = 0;
      currentEntry = "0";
    } else if (btnPressed === "CE") {
      currentEntry = "0";
    } else if (btnPressed === "Back") {
      currentEntry = currentEntry.substring(0, currentEntry.length - 1);
    } else if (btnPressed === "+/-") {
      currentEntry *= -1;
    } else if (btnPressed === ".") {
      currentEntry += ".";
    } else if (isNumber(btnPressed)) {
      if (currentEntry === "0") {
        currentEntry = btnPressed;
      } else {
        currentEntry = currentEntry + btnPressed;
      }
      e;
    } else if (isOperator(btnPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = btnPressed;
      currentEntry = "";
    } else if (btnPressed === "%") {
      currentEntry /= 100;
    } else if (btnPressed === "sqrt") {
      currentEntry = Math.sqrt(btnPressed);
    } else if (btnPressed === "1/x") {
      currentEntry = 1 / currentEntry;
    } else if (btnPressed === "pi") {
      currentEntry = Math.PI;
    } else if (btnPressed === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }
    updateScreen(currentEntry);
  });
});
