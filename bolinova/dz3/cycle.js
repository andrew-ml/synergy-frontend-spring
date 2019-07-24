/*С помощью цикла найдите сумму чисел от 1 до 100.*/

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
alert(sum);

/*Написать функцию,  возвращающую факториал числа. */

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
alert(factorial(9));
/**/
let number = prompt("введите число");
number = parseInt(number);

function factorial(m) {
  if (m <= 1) {
    return 1;
  }
  return m * factorial(m - 1);
}

alert("факториал" + number + "!=" + factorial(number));

/*Написать функцию возведения числа в степень*/

let digit = prompt("введите цифру");
let power = prompt("введите степень");
function degree(digit, power) {
  let result = digit ** power;
  if (isNaN(result)) {
    alert("It's impossible to raise " + num + " to power " + power);
  } else {
    alert("результат: " + result);
  }
}
degree(digit, power);
/*Написать функцию, которая проверяет знания таблицы умножения*/
function math() {
  while (1) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let res = +prompt(x + " * " + y + " =");
    if (res == "") {
      break;
    } else if (res == x * y) {
      alert("Правильно");
    } else if (res !== x * y) {
      alert("Не правильно");
    }
  }
}

math();
