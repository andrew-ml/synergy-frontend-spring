// function outputInterval(messege, time) {
//   setTimeout(function() {
//     alert(messege);
//   }, time);
// }

// outputInterval("Hello", 1000);

function task_11() {
  function task_1(a, b) {
    console.log("Task1:");
    for (a; a <= b; a++) {
      if (a % 2 == 0) {
        console.log(a);
      }
    }
  }
  task_1(12, 19);
}

function task_21() {
  function task_2(a, b) {
    console.log("Task2:");
    console.log((a + b) / 2);
  }

  task_2(2, 6);
}

function task_31() {
  function showFiveMessages(message) {
    console.log("Task3:");
    for (let i = 1; i <= 5; i++) {
      setTimeout(function() {
        console.log(message);
      }, i * 2000);
    }
  }

  showFiveMessages("Hello");
}

function task_41() {
  let second = prompt("Введите через сколько секунд вам напомнить");
  time = second * 1000;

  function outputInterval(messege, time) {
    console.log("Task4:");
    setTimeout(function() {
      console.log(messege);
    }, time);
  }

  outputInterval("Hello", time);
}

function task_51() {
  function run(callback) {
    setTimeout(function() {
      callback();
    }, 2000);
  }

  run(function() {
    console.log("Hello");
  });
}
