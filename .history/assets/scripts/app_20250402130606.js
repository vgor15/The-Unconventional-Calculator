const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const result = num1 + num2;
  return result;
}
addBtn.addEventListener("click", add());
outputResult(finalResult, "Initial value: 1 + 2");
