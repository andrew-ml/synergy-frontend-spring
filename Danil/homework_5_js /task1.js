let coin = ["Орел", "Решка"];

setInterval(function() {
  let hit = Math.floor(Math.random() * coin.length);
  console.log(coin[hit]);
}, 5000);
