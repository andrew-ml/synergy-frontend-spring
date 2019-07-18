function evensFromRange(a, b) {
  for (a; a <= b; a++) {
    if (a === b + 1) {
      break;
    }

    if (a % 2 === 0) {
      console.log(a);
    }
  }
}

// evensFromRange(9, 401);

function averageOfNumeral() {
  let firstNumber = prompt("Enter the first number");
  let secondNumber = prompt("Enter the second number");

  if (isNaN(+firstNumber) || isNaN(+secondNumber)) {
    alert("Одно из чисел введено некорректно");
    return;
  } else {
    let firstNumberCounter = 0;
    let firstNumberSum = 0;
    let secondNumberCounter = 0;
    let secondNumberSum = 0;
    let sumOfNumeralOfBothNumbers = 0;
    let lengthOfBothNumbers = 0;
    let averageOfNumeralOfNumbers;

    for (let i = 0; i < firstNumber.length; i++) {
      firstNumberCounter++;
    }

    for (let i = 0; i < firstNumberCounter; i++) {
      firstNumberSum += +firstNumber[i];
    }

    for (let i = 0; i < secondNumber.length; i++) {
      secondNumberCounter++;
    }

    for (let i = 0; i < secondNumber.length; i++) {
      secondNumberSum += +secondNumber[i];
    }

    sumOfNumeralOfBothNumbers = firstNumberSum + secondNumberSum;
    lengthOfBothNumbers = firstNumberCounter + secondNumberCounter;
    averageOfNumeralOfNumbers = sumOfNumeralOfBothNumbers / lengthOfBothNumbers;

    console.log("сумма цифр первого числа " + firstNumberSum);
    console.log("сумма цифр второго числа " + secondNumberSum);
    console.log("длина первого числа " + firstNumberCounter);
    console.log("длина второго числа " + secondNumberCounter);
    console.log(
      "Сумма цифр первого и второго числа " + sumOfNumeralOfBothNumbers
    );
    console.log("Сумма длин первого и второго числа " + lengthOfBothNumbers);
    console.log(
      "Среднее арифметическое цифр первого и второго числа =  " +
        averageOfNumeralOfNumbers
    );
  }
}

// averageOfNumeral();

// TODO : MAKE THIS CODE CORRECT

// function showFiveMessage(str) {
//   let i = 0;
//   while (i < 5) {
//     setTimeout(function () {
//       console.log(str + " " + i);
//     }, 1000);
//     i++;
//   }
// }

// showFiveMessage("Hello");

function showMessage(str) {
  let time = prompt("Через какое кол-во секунд вывести сообщение?");

  //преобразование секунд в миллисекунды

  time = time + 100;

  setTimeout(function() {
    console.log(str);
  }, time);
}

// showMessage("Hi!");

function runAfterThoSeconds(callback) {
  setTimeout(callback, 2000);
}

// runAfterThoSeconds(function () {
//   console.log("Hi!!!1")
// });

function mySetTimeout(callback, time) {
  setTimeout(callback, time);
  console.log(callback);
}

// mySetTimeout(function () {
//   console.log("Hello")
// }, 1000);

// let counter = 0;

// for (let i = 0; i < 5; i++) {

//   setInterval(function () {
//     console.log("hello");
//     counter++;
//   }, 1000);

//   if (counter === 5) {
//     clearInterval(clear);
//   }
// }

let counter = 0;
let timer;

function showFiveMessages() {
  if (counter === 5) {
    clearTimeout(timer);
  } else {
    console.log("Hi!");
    counter++;
  }

  timer = setTimeout(showFiveMessages, 1000);
}

showFiveMessages();
