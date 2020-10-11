function getCount(str) {
  return (str.match(/[aiueo]/gi) || []).length;
}
