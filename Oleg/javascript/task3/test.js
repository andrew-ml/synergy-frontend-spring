/* Задача №1*/

var sum = 0;
for (let i = 0; i < 100; i++) {
    var sum = sum + i;
};

console.log(sum);

/* Задача №2*/

function factorial(a) {
    let result = 1;
    for (let i = 1; i < a + 1; i++) {
        result *= i;
    };
    return result;
};

console.log(factorial(7));

/* Задача №3*/

function degree(number, n) {
    var b = number;

    for (i = 1; i < n; i++) {
        var b = b * number;
    };
    return b;
};

console.log(degree(5, 5));

/* Задача №4*/

function multiplicationTable() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let a = prompt('Сколько будет ' + x + ' * ' + y + ' = ?');
    if (a == x * y) {
        alert('Верно, вы еще помните таблицу умножения');
    } else if (a == '') {
        alert('Проверка окончена');
    } else {
        alert('Не правильно. стоит повторить таблицу умножения');
    };
    return a;
};

do {
    num = multiplicationTable();
} while (num !== '');