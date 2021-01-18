function getSum( a,b ) {
  let sum = 0;
  if (a === b) {
    return a
  }
  for (let i = a < b ? a : b; i <= (a < b ? b : a); i++) {
    sum += i
  }
  return sum
}
