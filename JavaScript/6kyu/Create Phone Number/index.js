function createPhoneNumber(numbers) {
  function getNumber(start, end) {
    return numbers.join('').substring(start, end)
  }
  return `(${getNumber(0, 3)}) ${getNumber(3, 6)}-${getNumber(6, 10)}`
}
