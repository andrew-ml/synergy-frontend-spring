let number1 = prompt("Введите число х");
let number2 = prompt("введите число у");
number1 = parseFloat(number1);
number2 = parseFloat(number2);
let c = Number(number1) / Number(number2);

switch (number1) {
  case "∞":
    number1 = Infinity;
    break;
  case "-∞":
    number1 = -Infinity;
    break;
}
switch (number2) {
  case "∞":
    number2 = Infinity;
    break;
  case "-∞":
    number2 = -Infinity;
    break;
}

if (isNaN(c)) {
  alert("невозможно выполнить математическую операцию");
} else if (c == Infinity) {
  alert("∞");
} else if (c == -Infinity) {
  alert("-∞");
} else {
  alert(c);
}
