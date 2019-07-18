let message = prompt("Введите слово!", "");

function showFiveMessages(message) {
  setTimeout(function() {
    console.log(message);
  }, 1000);
}

for (var i = 5; i <= 0; i--) {
  showFiveMessages(message);
}
