let arr = [];

for (i = 0; i <= 999999; i++) {
  arr[i] = "abc";
}

let timeIntial = performance.now();

arr.push("abc");

let timePush = performance.now() - timeIntial;

console.log(
  `Время выполнения метода push = ${timePush.toFixed(4)} миллисекунд`
);

timeIntial = performance.now();

arr.unshift("abc");

let timeUnshift = performance.now() - timeIntial;

console.log(
  `Время выполнения метода unshift = ${timeUnshift.toFixed(4)} миллисекунд`
);

console.log(
  `Метод push быстрее метода unshift в ${(timeUnshift / timePush).toFixed(
    4
  )} раз`
);
