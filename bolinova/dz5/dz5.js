/*
Написать программу “Орел - Решка”, которая будет рандомно (в случайном порядке) каждые 5 секунд выводить в консоль строку “Орел” или “Решка”.
*/

/*let coin = ["Орел", "Решка"];

setInterval(function() {
  let shot = Math.floor(Math.random() * coin.length);
  console.log(coin[shot]);
}, 5000);*/

/*Написать программу, которая 1000 раз “подбросит” монетку и выведет результат, сколько раз выпал “Орел”, и сколько “Решка”.*/

/*let coin = ["Орел", "Решка"];
let eagle = 0;
let rescue = 0;

for (i = 0; i <= 1000; i++) {
  let shot = Math.floor(Math.random() * coin.length);
  if (shot === 0) {
    eagle += 1;
  } else {
    rescue += 1;
  }
}

console.log(`Решка выпала ${eagle} раз`);
console.log(`Орел выпал ${rescue} раз`);*/

/*Написать функцию randomInteger(min, max), которая выводит случайное число в диапазоне min...max. Пример использования: randomInteger(1, 10);*/

/*function randomInteger(min, max) {
  let x = min + Math.floor(Math.random() * (max + 1 - min));
  console.log(x);
}

randomInteger(23, 48);*/
/*Написать функцию, которая находит количество вхождений заданной стоки в заданной строке.*/

/*function amount(x, y) {
  let count = 0;
  let position = 0;

  while (true) {
    let foundPosition = y.indexOf(x, position);
    if (foundPosition == -1) break;

    count += 1;
    position = foundPosition + 1;
  }
  console.log(count);
}

amount("c", "vbcccdhfydckdjfyrchdjc fkfhcldkfhftcsfyc ddfc");*/
/*Написать функцию с заведомо ошибочным кодом, чтобы получить ошибку в консоли браузера. Затем обернуть в try..catch, и вывести в коноль ошибку*/
/*try {
  function amount(x, y) {
    let count = 0;
    let position = 0;

    while (true) {
      let foundPosition = y.indexOf(x, oops);
      if (foundPosition == -1) break;

      count += 1;
      position = foundPosition + 1;
    }
    console.log(count);
  }

  amount("aa", "asaadcsaxasa asdwjcisaam");
} catch (err) {
  console.log(err);
}*/
/*Написать функцию hideSymbol(sym, text), которая в заданной строке заменит аргумент sym на "*".
Пример использования: hideSymbol("a", "asdsfac"); //"*sc*dsf*c"*/

/*Написать функцию, которая возвращает половину строки.
Пример использования: halfString("abcdef"); // "abc"
Если длина строки не делится пополам - округлить.

Используйте x.slice для обрезки строк./*/

/*function halfString(str) {
  console.log(str.slice(0, Math.floor(str.length / 2)));
}

halfString("acvcgfhdkanfh");*/

/*Написать функцию, которая вырезает все числа из строки.
Пример использования: cutNumbers("a123bcd"); // "abcd"

Используйте цикл для прохождения по всем символам строки
Используйте isNaN(x) для определения, число это или нет
Используйте x.slice для обрезки строк.
Используйте конкатенацию для того, чтобы слепить получившиеся строки:  "ab" + "cd" // получится "abcd"*/
/*function cutNumbers(str) {
  console.log(str.slice(0, Math.floor(number / g)));
}
cutNumbers("a123bcd");*/
/*Проверить на практике стратегию удвоения ставок в казино (Стратегия Мартингейл).
Стратегия в друх словах: у нас заведомо большая сумма денег: $10000, начинаем со ставки в $1, бросаем монетку. 
Если выиграли - забираем выигрыш (двойная ставка: $1 * 2 = $2), и снова начинаем со ставки в $1.
Если проиграли - удваиваем ставку и продолжаем бросать монетку, пока не выиграем. В таком случае выигрыш перебьет потери на проигранные ставки.
*/
let bank = 10000;
let rate = 1;

for (i = 0; i <= 10000; i++) {
  bank - rate;
  let shot = Math.floor(Math.random() * 2);
  if (bank <= 0) {
    alert(`Вы проиграли, попытка: ${i}, размер последней ставки: ${rate}$`);
    break;
  } else if (shot === 1) {
    bank += rate * 2;
    rate = 1;
  } else if (shot === 0) {
    bank -= rate;
    rate *= 2;
  } else {
    alert(`Вы победили, ваш банк: ${bank}$`);
  }
}
