function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => (a > b ? -1 : 1))
    .slice(-2)
    .reduce((ac, cv) => ac + cv);
}
