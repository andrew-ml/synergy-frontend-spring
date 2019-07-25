function arayyToStringWrap(arr) {
  for (i = 0; i < arr.length; i++) {
    let n = arr.shift();
    let str = "(" + n + ")";
    arr.push(str);
  }
  console.log(arr);
}

arayyToStringWrap(["A", "B", "C"]);
