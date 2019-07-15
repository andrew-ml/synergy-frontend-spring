// synergy task 2 - calculator

function simplyCalculator() {

  let firstOperand, secondOperand;

  function getOperands() {
    firstOperand = prompt("Введите первое число");
    secondOperand = prompt("Введите второе число");
  }

  function checkInfinity() {
    if (firstOperand == "∞") {
      firstOperand = Infinity;
    }

    if (firstOperand == "-∞") {
      firstOperand = -Infinity;
    }

    if (secondOperand == "∞") {
      secondOperand = Infinity;
    }

    if (secondOperand == "-∞") {
      secondOperand = -Infinity;
    }
  }

  function validation() {
    getOperands();
    checkInfinity();
  }

  let sign = prompt(
    "Введите операцию, которую хотите произвести над числами (+, -, *, /)"
  );

  let result;
  let outputMessage;

  switch (sign) {
    case "+":
      validation();
      result = +firstOperand + +secondOperand;
      outputMessage = "Результат сложения двух чисел - " + result;
      break;
    case "-":
      validation();
      result = firstOperand - secondOperand;
      outputMessage = "Результат вычитания второго числа из первого  - " + result;
      break;
    case "*":
      validation();
      result = firstOperand * secondOperand;
      outputMessage = "Результат произведения двух чисел - " + result;
      break;
    case "/":
      validation();
      result = firstOperand / secondOperand;
      outputMessage = "Результат деления первого числа на второе - " + result;
      break;
    default:
      alert("Операция выбрана некорректно");
      break;
  }

  if (isNaN(result)) {
    alert("Невозможно выполнить математическую операцию");
  } else if (result == Infinity) {
    alert("Результат такой операции равен ∞");
  } else if (result === -Infinity) {
    alert("Результат такой операции равен -∞");
  } else {
    alert(outputMessage);
  }
}

let calculatorBtn = document.getElementsByClassName('calculator-btn');

calculatorBtn[0].addEventListener("click", simplyCalculator);