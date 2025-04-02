const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const description = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, description);
}

function subtract() {
  const description = `${currentResult} - ${userInput.value}`;
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, description);
}

function multiply() {
  const description = `${currentResult}  ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, description);
}

function divide() {}

addBtn.addEventListener("click", add);
