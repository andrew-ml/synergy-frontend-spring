let a = prompt("Input A: ", "");
let b = prompt("Input B: ", "");
let symbol = prompt("введите необходимый символ: +, -, /, *");
a = parseFloat(a);
b = parseFloat(b);
let c = Number(a) / Number(b);

switch (symbol) {
  case "+":
    c = a + b;
    break;
  case "-":
    c = a - b;
    break;
  case "*":
    c = a * b;
    break;
  case "/":
    c = a / b;
    break;
}

if (isFinite(c)) {
  alert("расчет возможен");
  alert(c);
} else {
  alert("расчет невозможен");
}
