// Задание №1

function getEvenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) continue;
        console.log(i);
    };
};

getEvenNumbers(10, 18);

// Задание №1

function arithmeticalMean(a, b) {
    let mean = (a + b) / 2;
    return mean;
};
console.log(arithmeticalMean(100, 566));

// 2 способ

let mean = (a, b) => (a + b) / 2;
console.log(mean(1000, 9000));

// Задание №2

function showFiveMessages(message) {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(message);
        }, 3000);
    };
};


showFiveMessages('Hello');