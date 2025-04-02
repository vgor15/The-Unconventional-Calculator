const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  currentResult = currentResult + userInput.value;
}
addBtn.addEventListener("click", add);
outputResult(finalResult, "Initial value: 1 + 2");
