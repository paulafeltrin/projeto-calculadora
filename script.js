// LINKANDO HTML PARA O JAVASCRIPT
const beforeOperation = document.querySelector("#before-operation");
const nowOperation = document.querySelector("#now-operation");
const buttons = document.querySelectorAll("#btn-box button");

class Calculator {
  constructor(beforeOperation, nowOperation) { //DECLARAÇÃO DE CLASSE (estilo arrow function)
    this.beforeOperation = beforeOperation;
    this.nowOperation = nowOperation;
    this.nowOperation = "";
  }

  addDig(digit) {
    console.log(digit);
    if (digit === "." && this.nowOperation.innerText.includes(".")) {
      return;
    }

    this.nowOperation = digit;
    this.update();
  }

  processOp(operation) {
    // Check if current value is empty
    if (this.nowOperation.innerText === "" && operation !== "C") {
      // Change operation
      if (this.beforeOperation.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

  // Get current and previous values
  let operationValue;
  let previous = +beforeOperation.innerText.split(" ")[0];
  let current = +this.nowOperation.innerText;

switch (operation) {
  case "+":
    operationValue = previous + current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "-":
    operationValue = previous - current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "*":
    operationValue = previous * current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "/":
    operationValue = previous / current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "DEL":
    this.processDelOperator();
    break;
  case "CE":
    this.processClearCurrentOperator();
    break;
  case "C":
    this.processClearOperator();
    break;
  case "=":
    this.processEqualOperator();
    break;
  default:
    return;
}

 // Change values of calculator screen
 updateScreen(
  operationValue = null,
  operation = null,
  now = null,
  before = null
) 
{
  if (operationValue === null) {
    // Append number to current value
    this.nowOperation.innerText += this.nowOperation;
  } else {
    // Check if value is zero, if is just add current value
    if (before === 0) {
      operationValue = nowOperation;
    }
    // Add current value to previous
    this.beforeOperation.innerText = `${operationValue} ${operation}`;
    this.nowOperation.innerText = "";
  }
}

// Change math operation
changeOp(operation) 
{
  const mathOperations = ["*", "-", "+", "/"];

  if (!mathOperations.includes(operation)) {
    return;
  }

    this.beforeOperation.innerText =
    this.beforeOperation.innerText.slice(0, -1) + operation;
}

// Delete a digit
processDel() 
{
    this.nowOperation.innerText =
    this.nowOperation.innerText.slice(0, -1);
}

// Clear current operation
processClearNowOperation() 
{
  this.nowOperation.innerText = "";
}

// Clear all operations
processClearOperator() 
{
  this.nowOperation.innerText = "";
  this.beforeOperation.innerText = "";
}

// Process an operation
processEqua() 
{
  let operation = this.beforeOperation.innerText.split(" ")[1];

  this.processOperation(operation);
}
}

calc = new Calculator(beforeOperation, nowOperation);

buttonsforEach(btn) {
    btn.addEventListener("click", (e)) ; {
    const value = e.target.innerText;
    if (+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  }
}
}
