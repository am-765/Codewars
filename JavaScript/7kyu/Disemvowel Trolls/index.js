function disemvowel(str) {
  return str.match(/[^aiueo]/gi).join('');
}
