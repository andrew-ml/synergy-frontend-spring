let bank = 10000;
let rate = 1;

for (i = 0; i <= 1000000; i++) {
  bank - rate;
  let hit = Math.floor(Math.random() * 2);
  if (bank <= 0) {
    alert(`Вы проиграли, попытка: ${i}, размер последней ставки: ${rate}$`);
    break;
  } else if (hit === 1) {
    bank += rate * 2;
    rate = 1;
  } else if (hit === 0) {
    bank -= rate;
    rate *= 2;
  } else if (i == 0 && bank > 0) {
    alert(`Вы победили, ваш банк: ${bank}$`);
  }
}
