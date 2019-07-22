function generate() {
  let password = "";
  const name = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  for (let i = 0; i < 10; i++) {
    password += name.charAt(Math.floor(Math.random() * name.length));
  }
  document.getElementById("random").innerHTML = password;
}

function task_11() {
  for (let i = 0; i <= 100; i++) {
    setTimeout(function() {
      var rand = Math.floor(Math.random() * 2);
      if (rand === 1) {
        console.log("Орел");
      } else console.log("Решка");
    }, i * 5000);
  }
}

function task_21() {
  var orel = 0;
  var resh = 0;
  for (let i = 0; i < 1000; i++) {
    var rand = Math.floor(Math.random() * 2);
    if (rand === 1) {
      resh++;
    } else {
      orel++;
    }
  }
  console.log("Решка = " + resh);
  console.log("Орел = " + orel);
}

function task_31() {
  let a = +prompt("Введите минимальный интервал");
  let b = +prompt("Введите максимальный интервал");

  function randomInteger(min, max) {
    if (a > b) {
      console.log("Error");
    } else {
      let random = Math.floor(min + Math.random() * (max + 1 - min));
      return random;
    }
  }

  console.log(randomInteger(a, b));
}

function task_41() {
  let str = "aabs saa12aa23fdaa",
    count = 0;
  let pos = str.indexOf("aa");

  while (pos !== -1) {
    count++;
    pos = str.indexOf("aa", pos + 1);
  }

  console.log(count);
}

function task_51() {
  try {
    let a = 1,
      b = 2;
    console.log(a + B);
  } catch (err) {
    console.log("Не прошло, ищи ошибку");
  }
}

function task_61() {
  function hideSymbol(symbol, text) {
    var output = "";
    for (var i = 0; i < text.length; i++) {
      var outputSign = text[i];

      if (outputSign === symbol) {
        output += "*";
      } else {
        output += outputSign;
      }
    }
    console.log(output);
  }

  hideSymbol("a", "asdsfac");
}

function task_71() {
  function halfString(message) {
    let number = Math.ceil(message.length / 2);
    console.log(message.slice(0, number));
  }
  halfString("abcdef");
}

function task_81() {
  alert("Сложна и нипонятно!");
}

function task_91() {
  let money = 10000;
  var bet = 1;
  let target = prompt(
    "Введите сумму на которой планируете остановится? У вас сейчас: " + money
  );

  for (let i = 0; i < 20000; i++) {
    let number = Math.floor(Math.random() * 2);
    document.writeln(" Сума " + money + "$ Выпало число " + number + "<br />");
    if (money <= 0) {
      console.log(
        "Вы проиграли! Попыток было: " + i + " сумма последней ставки:" + bet
      );
      break;
    }
    if (number === 0) {
      // money = money + bet * 2;
      // bet = 1;

      if (bet != 1) {
        bet = 1;
        money = money + bet * 2;
      } else {
        money = money + bet * 2;
      }
      bet = 1;
    }
    if (number === 1) {
      money = money - bet;
      bet = bet * 2;
    }
    if (money > target) {
      console.log(
        "Вы вышли в плюс! Спустя " +
          i +
          " попыток " +
          ", ваш баланс состовляет " +
          money
      );
      break;
    }
  }
}
