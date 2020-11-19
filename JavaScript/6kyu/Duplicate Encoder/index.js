function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  return lowerWord.split('').map((cv, id) => lowerWord.indexOf(cv) === id && id == lowerWord.lastIndexOf(cv) ? '(' : ')').join('')
}
