function randomInteger(min, max) {
  let n = min + Math.floor(Math.random() * (max + 1 - min));
  console.log(n);
}

randomInteger(5, 22);
