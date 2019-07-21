//Task 1

function randCoin() {
  setInterval(function() {
    let arr = ["Орел", "Решка"];
    let rand = Math.floor(Math.random() * arr.length);
    console.log(arr[rand]);
  }, 5000);
}

//Task2
function moreCoin() {
  let orel = 0;
  let reshka = 0;
  let arr = ["Орел", "Решка"];
  for (let i = 0; i < 1000; i++) {
    let side = arr[Math.floor(Math.random() * arr.length)];
    if (side == "Орел") {
      orel++;
    } else {
      reshka++;
    }
  }
  alert(`Орел:${orel}, Решка:${reshka}`);
}

//Task3

function randomInteger() {
  let min = +prompt("Введите первое значение");
  let max = +prompt("Введите второе значение");
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  alert(rand);
}

//Task 4

// function amount() {
//   let myStr = prompt("Вхождение строки:");
//   let str = prompt("В строке:");
//   let res = 0;
//   let len = 0;
//   while (str.indexOf(myStr, len) != -1) {
//     len = str.indexOf(myStr, len) + myStr.length;
//     res++;
//   }
//   alert(res);
// }
function amount() {
  myStr = prompt("Вхождение строки:");
  str = prompt("В строке:");
  let res = 0;
  let i = 0;
  let len = myStr.length;
  let indexStr;
  while ((indexStr = str.indexOf(myStr, i)) != -1) {
    indexStr = str.indexOf(myStr, i);
    res++;
    i = indexStr + len;
  }
  alert(res);
}

//Task 5

function check() {
  try {
    check1();
    function check1() {
      alert(bla);
    }
  } catch (err) {
    console.log(" " + err);
  }
}

//Task 6

function hideSymbol() {
  let smbl = prompt("Ввведите символ");
  let str = prompt("Ввведите строку")
    .split(smbl)
    .join("*");
  alert(str);
}

//Task 7

function halfString() {
  let str = prompt("Ввведите строку");
  let len = Math.round(str.length / 2);
  alert(str.slice(0, len));
}

//Task 8

function cutNumber() {
  let str = prompt("Ввведите строку");
  let newStr = " ";
  for (let i; i < str.length; i++) {
    if (isNan(str[i]) == true) {
      newStr += str.slice(i, i + 1);
    }
  }
  newStr = str.replace(/[0-9]/g, "");
  alert(newStr);
}

//Task 8.2

// function cutNumber() {
//   let str = prompt("Ввведите строку");
//   let newStr = str.replace(/[0-9]/g, "");
//   alert(newStr);
// }

//Task 9

//0-win,1-lose

function casinoCoin() {
  let sumMoney = 10000;
  let rate = 1;
  let tryC = 0;
  casino(rate, sumMoney, tryC);
  function casino(rate, sumMoney, tryC) {
    while (tryC < 10000) {
      if (sumMoney <= 0) {
        break;
      } else {
        let rand = Math.round(Math.random());
        if (rand == 0) {
          sumMoney += rate;
          tryC++;
          rate = 1;
          casino(rate, sumMoney, tryC);
        } else {
          sumMoney -= rate;
          rate *= 2;
          tryC++;
          casino(rate, sumMoney, tryC);
        }
      }
    }

    if (tryC != 10000) {
      alert(
        `You lose, try number:${tryC},last rate:${rate},sum money ${sumMoney}`
      );
    } else {
      alert(`You win:${sumMoney}`);
    }
  }
}
