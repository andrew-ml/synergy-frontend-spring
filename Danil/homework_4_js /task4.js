let num = prompt("Введите число", "");
let num2 = prompt("Введите второе число", "");

function averageSum(num, num2) {
  let arr1 = num.split("");
  let arr2 = num2.split("");
  let arr = arr1.concat(arr2);
  let sum = eval(arr.join("+"));
  let result = sum / arr.length;
  console.log(arr1);
  console.log(arr2);
  console.log(arr);
  console.log(sum);
  console.log(result);
  alert("Среднее арифметическое сумм цифр в этих числах = " + result);
}

averageSum(num, num2);
