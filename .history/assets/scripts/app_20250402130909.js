const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}
addBtn.addEventListener("click", add);
