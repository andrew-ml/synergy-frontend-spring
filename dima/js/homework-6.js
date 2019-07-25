function returnStringWithSymbol(arr, symbol) {
  let str = arr.join(symbol);

  console.log(str);
  console.log(typeof str);
}

// returnStringWithSymbol([1, 3, 12, "str", ], '+=');

function wrapAllEmelemts(arr) {
  let str = arr.join(')(');

  arr = str.split();

  arr.unshift('(');
  arr.push(')');
  str = arr.join('');

  console.log(str);
}

// wrapAllEmelemts([1, 2, 3, 4, 5, 1231, 12313254, 13241234]);

function deleteEveryEvenElement(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number") {
      if (arr[i] % 2 === 0) {
        arr.splice(i, 1);
        i--;
      }

    }
  }

  console.log(arr);
}

// deleteEveryEvenElement([1, 2, 3, 4, "str", undefined, -228, -14 / 88, -69]);

function returnPositiveElements(arr) {
  alternativeArray = [];

  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number") {
      if (arr[i] > 0) {
        alternativeArray.push(arr[i]);
      }
    }

  }

  console.log(alternativeArray);
}

// returnPositiveElements([-1, 0, 34, 0.6, Infinity, "str", -39]);


function calculateTime() {

  let arr = [1, 2, 3, 4, 5];

  arr[1e6] = 6;

  let timeUnshift = performance.now(arr.unshift("unshift"));
  let timePush = performance.now(arr.push("push"));
  console.log(`${timeUnshift} time for unshift()`);
  console.log(`${timePush} time for push()`);

  console.log(arr);

  console.log(`Push faster than Unshift in ${timeUnshift/timePush} times`);
}


calculateTime();