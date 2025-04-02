const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const description = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, description);
}

function subtract() {}

function multiply() {}

function divide() {}s

addBtn.addEventListener("click", add);
