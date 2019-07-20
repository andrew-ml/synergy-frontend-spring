let coin = ["Орел", "Решка"];
let eagle = 0;
let tails = 0;

for (i = 1; i <= 1000; i++) {
  let hit = Math.floor(Math.random() * coin.length);
  if (hit === 0) {
    eagle += 1;
  } else {
    tails += 1;
  }
}

console.log(`Решка выпала ${tails} раз(a)`);
console.log(`Орел выпал ${eagle} раз(a)`);
