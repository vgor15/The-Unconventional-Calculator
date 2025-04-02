const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const result = currentResult + userInput;
  return result;
}
addBtn.addEventListener("click", add());
outputResult(finalResult, "Initial value: 1 + 2");
