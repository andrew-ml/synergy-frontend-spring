Array.prototype.mySplice = function(first, amount, ...rest) {
  for (let i = first; i < this.length; i++) {
    for (j = 0; j < amount; j++) {
      delete this[i];
    }
  }
  for (k = 0; k < rest.length; k++) {
    this.unshift(rest[k]);
  }
};

let x = [1, 2, 3];
x.mySplice(0, 1, "X", "Y", "H", "S");
console.log(x);
