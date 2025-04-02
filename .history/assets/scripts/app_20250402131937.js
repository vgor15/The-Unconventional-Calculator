const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, );
}
addBtn.addEventListener("click", add);
