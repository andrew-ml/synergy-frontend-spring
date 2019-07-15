function multiplicationTable() {

  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let answer = x * y;
  let result;

  for (let i = 0;; i++) {
    result = prompt(x + " x " + y + " = ");
    if (result === "" || result === null) {
      break;
    }

    result = +result;

    if (isNaN(result)) {
      alert("it's not a number ");
    } else if (answer === result) {
      alert("correct");
    } else {
      alert("incorrect");
    }

    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    answer = x * y;
  }
}

let multiBtn = document.getElementsByClassName('multi-btn');

multiBtn[0].addEventListener("click", multiplicationTable);