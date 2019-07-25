let arr = [123, -23, 0, 46, -34, 3.23];

function positiveNumber(i) {
  return i >= 0;
}

console.log(arr.filter(positiveNumber));
