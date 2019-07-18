let a = +prompt("Введите первое число!", "");
let b = +prompt("Введите второе число!", "");

function getEvenNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

getEvenNumbers(a, b);
