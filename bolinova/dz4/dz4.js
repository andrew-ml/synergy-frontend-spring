/*Создайте функцию, которая принимает в качестве параметров два целых числа (a и b) и выводит в консоль все чётные числа из диапазона a...b*/

/*let x = prompt("введите случайное число1");
let y = prompt("введите случайное число2");
function getEvenNumbers(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
getEvenNumbers(x, y);*/
/*Создайте функцию, которая принимает в качестве параметров два целых числа и возвращает среднее арифметическое сумм цифр в этих числах.*/
/*let a = prompt("введите a");
let b = prompt("введите b");
function average(a, b) {
  let arr1 = a.split("");
  let arr2 = b.split("");
  let arr = arr1.concat(arr2);
  let sum = eval(arr.join("+"));
  let result = sum / arr.length;
  console.log(arr1);
  console.log(arr2);
  console.log(arr);
  console.log(sum);
  console.log(result);
  alert("Среднее арифметическое сумм цифр в этих числах = " + result);
}

average(a, b);*/
/*Напишите функцию, которая будет выводить в консоль 5 сообщений с интервалом в 1 секунду. Используйте комбинацию setTimeout и цикла*/

/*showFiveMessages("Hello");

function showFiveMessages(message) {
  console.log("hello");
}
setTimeout(showFiveMessages, 1000);*/

/*Создайте функцию, которая будет в качестве параметра принимать строку message. Функция запрашивает у пользователя время в секундах (с помощью prompt) и выводит сообщение message через то время, которое указал пользователь.*/
