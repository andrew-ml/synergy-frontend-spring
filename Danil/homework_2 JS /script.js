let num1 = prompt("Введите первое число!", "");
let num2 = prompt("Введите второе число!", "");
let sign = prompt("Введите знак операции (+, -, *, /)", "");
let result;

switch (num1) {
  case "∞":
    num1 = Infinity;
    break;
  case "-∞":
    num1 = -Infinity;
    break;
}

switch (num2) {
  case "∞":
    num2 = Infinity;
    break;
  case "-∞":
    num2 = -Infinity;
    break;
}

num1 = Number(num1);
num2 = Number(num2);

switch (sign) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
}

if (isNaN(result)) {
  alert("Невозможно выполнить математическую операцию");
} else if (result == Infinity) {
  alert("∞");
} else if (result == -Infinity) {
  alert("-∞");
} else {
  alert(result);
}
