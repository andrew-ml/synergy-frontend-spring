// Задание №1

function getEvenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) continue;
        console.log(i);
    };
};

getEvenNumbers(10, 18);

// Задание №2

function arithmeticalMean(a, b) {
    let mean = (a + b) / 2;
    return mean;
};
console.log(arithmeticalMean(100, 566));

// 2 способ

let mean = (a, b) => (a + b) / 2;
console.log(mean(1000, 9000));

// Задание №3

function showFiveMessages(message) {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(message);
        }, i * 1000);
    };
};


showFiveMessages('Hello');

// Задание №4

function showMessage() {
    let message = prompt('Ваше сообщение');
    let time = prompt('Через сколько секунд выывести сообщение');
    setTimeout(function () {
        console.log(message);
    }, time * 1000);
};

showMessage();

// Задание №5

function runAfterTwoSeconds(callback) {
    callback();
};

runAfterTwoSeconds(function () {
    setTimeout(function () {
        console.log('Hello');
    }, 2000);
});

// Задание №6

function mySetTimeout(message, callback) {
    console.log(message);
    callback();
};

mySetTimeout('Hello', function () {
    setTimeout(function () {
        console.log('My friend');
    }, 2000);
});