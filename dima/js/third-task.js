function sumOfAllElements() {

  let numberForSum = prompt("Enter the number for calculation sum");

  let sum = 0;

  if (isNaN(+numberForSum)) {
    alert("your value is not a number")
    return;
  } else if (numberForSum < 0) {
    alert('Your value smaller than zero')
  } else {

    for (let i = 0; i <= numberForSum; i++) {
      sum += i;
    }

    alert(sum);
  }

};

let sumOfAllElementsBtn = document.getElementsByClassName('number-for-sum-btn');
sumOfAllElementsBtn[0].addEventListener("click", sumOfAllElements);














function factorial() {

  let num = prompt("Enter the number for factorial");

  let result = 1;

  if (isNaN(num)) {
    alert(num + " is not a number");
    return;
  } else if (num == Infinity || num == -Infinity || num === 0 || num < 0) {
    alert("It's impossible to get a factorial from this value")
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    alert(result);
  }
}


let factorialBtn = document.getElementsByClassName('factorial-btn');
factorialBtn[0].addEventListener('click', factorial);















function numToPower() {
  let num = prompt("Enter the number for raise to power");
  let power = prompt("Enter the power");

  function degree(num, power) {
    let result = num ** power;

    if (isNaN(result)) {
      alert("It's impossible to raise " + num + " to power " + power);
    } else {

      alert(result);
    }
  }
  degree(num, power);
}

let numToPowerBtn = document.getElementsByClassName('num-to-power-btn');
numToPowerBtn[0].addEventListener('click', numToPower);