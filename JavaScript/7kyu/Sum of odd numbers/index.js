function rowSumOddNumbers(n) {
  let x = 1;
  let y = [];
  for (let i = 0; i < n; i++) {
    x += 2 * i;
  }
  for (let j = 0; j < n; j++) {
    y.push(x + j * 2);
  }
  return y.reduce((ac, cv) => ac + cv, 0);
}
