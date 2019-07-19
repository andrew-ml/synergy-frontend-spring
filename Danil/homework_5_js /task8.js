let bank = 10000;
let rate = 1;
let options = ["Орел", "Решка"];

for (i = 0; i <= 1000000; i++) {
  let casino = Math.floor(Math.random() * options.length);
  let person = Math.floor(Math.random() * options.length);
  if (bank == 0) {
    alert(`Вы проиграли, попытка: ${i}, размер последней ставки: ${rate}`);
  } else if (person === casino) {
    bank += rate * 2;
    bank - rate;
  } else if (person !== casino) {
    bank -= rate;
    rate *= 2;
    bank - rate;
  } else {
    alert(`Вы победили, ваш банк: ${bank}`);
  }
}
