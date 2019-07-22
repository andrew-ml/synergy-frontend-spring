function headsAndTails() {
  let value;
  value = Math.floor(Math.random() * 2);
  if (value === 0) {
    value = "Орел";
  } else {
    value = "Решка";
  }

}

//setInterval(headsAndTails, 1000);


function manyTimesToTossACoin(quantity) {
  let headCounter = 0;
  let tailCounter = 0;

  if (typeof quantity !== "number") {
    alert("Аргумент функции введен некорректно");
  } else {
    for (let i = 0; i < quantity; i++) {
      let value;
      value = Math.floor(Math.random() * 2);
      if (value === 0) {
        value = "Орел";
      } else {
        value = "Решка";
      }
      if (value === "Орел") {
        headCounter++;
      } else {
        tailCounter++;
      }
    }
    console.log(`Орел выпал ${headCounter} раз`);
    console.log(`Решка выпала ${tailCounter} раз`);

  }
}

//manyTimesToTossACoin(1000);

function randomNumberFromRange(min, max) {

  let result = Math.floor(Math.random() * max) + 1;

  if (result < min) {
    randomNumberFromRange(min, max);
  } else {
    console.log(result);
  }

}

// randomNumberFromRange(10, 20);


function searchSubstringInString(substr, str) {

  let counter = 0;

  for (let position = 0; position < str.length; position++) {

    let searchPosition = str.indexOf(substr, position);

    if (searchPosition == -1) {
      break;
    } else {
      position = searchPosition + 1;
      counter++;
    }
  }

  if (counter === 0) {
    console.log('Данная подстрока в строке не встречается');
  } else {
    console.log(`Данная подстрока встречается в строке ${counter} раз`);
  }
}

// searchSubstringInString("13", "13333133132213234234324");

// try {

//   const num = 10;
//   num = 30;

// } catch (error) {

//   alert("WARNING");
// }

function hideSymbol(symbol, str) {
  let newStr = '';

  for (let position = 0; position < str.length; position++) {

    if (str[position] === symbol) {
      str = str.replace(symbol, "*");

    }

  }
  console.log(str);
}

// hideSymbol("s", "assadgewaaargsdfaddfsdf");

function returnHalfString(str) {


  let half = Math.floor(str.length) / 2;

  str = str.slice(0, half);

  console.log(str);
}

// returnHalfString("Uno complianos de Alexia");

function cutNumbers(str) {

  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(Number(arr[i]))) {
      delete arr[i];
    }
  }

  str = arr.join('');
  console.log(str);

}

// cutNumbers("23іва1211ed2321dd132f43223іфв");