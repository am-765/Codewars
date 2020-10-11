function getCount(str) {
  const pattern = str.match(/[aiueo]/gi);
  return pattern ? pattern.length : 0;
}
