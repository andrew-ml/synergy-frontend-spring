// Сумма чисел

/*let sum = null;

for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);*/

//Факториал

/*let counter = prompt("Введите число!", "");
counter = parseInt(counter);

function factorial(x) {
  if (x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

alert("Факториал числа: " + counter + "! = " + factorial(counter));*/

// Степень

/* function degree(number, n) {
  let result = number;

  for (var i = 1; i < n; i++) {
    result *= number;
  }

  return result;
}

let number = +prompt("Введите число!", "");
let n = +prompt("Введите степень!", "");

if (n <= 1) {
  alert(
    "Степень " + n + " не поддерживается, введите целую степень, большую 1"
  );
} else if (!Number(number) || !Number(n)) {
  alert("Вы ввели не число!", "");
} else {
  alert(number + " в степени " + n + " = " + degree(number, n)); 
}*/

// Таблица умножения

/*function math() {
  while (1) {
    let x = Math.floor(Math.random(1) * 10);
    let y = Math.floor(Math.random(1) * 10);
    let res = +prompt(x + " x " + y + " =", "");
    if (res == "" && res !== 0) {
      break;
    } else if (res == x * y) {
      alert("Правильно");
    } else if (res !== x * y) {
      alert("Не правильно");
    }
  }
}

math();*/
