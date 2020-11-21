function duplicateEncode(word) {
  return word.toLowerCase().split('').map((cv, _, arr) => arr.indexOf(cv) === arr.lastIndexOf(cv) ? '(' : ')').join('')
}
