function amount(a, b) {
  let count = 0;
  let pos = 0;

  while (true) {
    let foundPos = b.indexOf(a, pos);
    if (foundPos == -1) break;

    count += 1;
    pos = foundPos + 1;
  }
  console.log(count);
}

amount("aa", "asaadcsaxasa asdwjcisaam");
