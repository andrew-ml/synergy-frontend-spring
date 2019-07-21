function hideSymbol(sym, text) {
  for (i = 0; i <= text.length; i++) {
    if (sym == text[i]) {
      text[i] = "*";
    }
  }
  console.log(text);
}

hideSymbol("a", "asdsfac");
