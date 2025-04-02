const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, `${currentResult} + ${userInput.value} = `);
}
addBtn.addEventListener("click", add);
