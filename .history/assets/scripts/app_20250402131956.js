const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const description = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, description);
}
addBtn.addEventListener("click", add);
