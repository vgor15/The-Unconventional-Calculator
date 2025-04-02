/*************  ✨ Codeium Command 🌟  *************/
const defaultValue = 0;
let currentResult = defaultValue;

const createDescription = (operator) => 
  `${currentResult} ${operator} ${userInput.value}`;
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

const calculate = (fn) => {
  const description = createDescription(fn);
  currentResult = fn(currentResult, parseInt(userInput.value));
function multiply() {
  const description = `${currentResult} * ${userInput.value}`;
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, description);
};
}

addBtn.addEventListener("click", () => calculate((a, b) => a + b));
subtractBtn.addEventListener("click", () => calculate((a, b) => a - b));
multiplyBtn.addEventListener("click", () => calculate((a, b) => a * b));
divideBtn.addEventListener("click", () => calculate((a, b) => a / b));
function divide() {
  const description = `${currentResult} / ${userInput.value}`;
  currentResult = currentResult / parseInt(userInput.value);
  outputResult(currentResult, description);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

/******  1e32b8be-a08e-4288-910c-9990bb1e1e08  *******/