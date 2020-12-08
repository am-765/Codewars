function alphabetPosition(text) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  const alphabet = text.toLowerCase().match(/[a-z]/g)
  return alphabet === null ? '' : alphabet.map(cv => alphabets.indexOf(cv) + 1).join(' ') || ''
}
