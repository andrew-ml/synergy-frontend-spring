//  1 task
// var arr = new Array();
// ar[0] = "орел";
// ar[1] = "решка";

// setInterval(function random() {
//   console.log(arr[Math.round(Math.random())]);
// }, 5000);

//  2 task
// let counterEagle = 0;
// let counterTails = 0;
// function rand() {
//   for (var i = 1; i <= 1000; i++) {
//     let result;
//     result = Math.floor(Math.random() * 2);
//     console.log(result);
//     if (result === 0) {
//       counterEagle += 1;
//     } else {
//       counterTails += 1;
//     }
//   }
// }
// rand();
// console.log("орел:" + counterEagle);
// console.log("решка:" + counterTails);

//  3task
// function minMax(min, max) {
//   var rand = min - 0.5 + Math.random() * (max - min + 1);
//   rand = Math.round(rand);
//   return rand;
// }

// 4 task
// let str = "aabs saa12aa23fdaa";
// function amount() {
//   console.log(str.split("aa").length - 1);
// }
// amount();

// 5 task
// try {
//   var str = "aabs saa12aa23fdaa";
//   function amount(str) {
//     console.log(str.split("aa").length - 1);
//   }
//   amount();
// } catch (e) {
//   console.log("Ошибка:" + e.message + "\n" + e.stack);
// }

// 6 task
// function hideSymbol(sum, text) {
//   for (var i = 0; i <= text.length; i++) {
//     if (text.indexOf(sym) > 0) {
//       sum = "";
//     }
//   }
// }

// 7 task
// function halfString() {
//   var str = "dghfgnghn";
//   console.log(str.substr(0, str.length / 2));
// }
// halfString();

// 8 task
// var num = parseInt("a123bcd".replace(\d+/g, ""));
// alert(num);
// console.log(/[0-9]/.test("in 1992"));
var str = "";
function cutNumbers(str) {
  for (var i = 0; i <= str.length; i++) {
    if (isNaN(i) == false) {
      str.slice(i);
    }
  }
}
