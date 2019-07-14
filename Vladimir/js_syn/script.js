function task_1() {
  let sum = 0;
  for (let i = 1; i < 100; i++) {
    sum += i;
  }
  alert("Сумма числа: " + sum);
}

function task_2() {
  let num = prompt("factorial");
  var factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial = factorial * i;
  }
  alert(num + "!" + " = " + factorial);
}

function task_3() {
  let num = prompt("Number");
  let power = prompt("Power");
  alert(Math.pow(num, power));
}

function task_4() {
  for (let i = 0; ; ) {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let sum;
    let i = prompt(x + " * " + y);
    sum = x * y;

    if (i == sum) {
      alert("Верно " + x + " * " + y + " = " + sum);
    } else if (i === "" || i === " ") {
      alert("Ну хорошо, отдохни!");
      break;
    } else {
      alert("Не верно " + x + " * " + y + " Будет: " + sum);
    }
  }
}
