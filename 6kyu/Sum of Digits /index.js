function digital_root(n) {
  while (n > 9) {
    n = n.toString().split('').map(Number).reduce((a, b) => a + b);
  }
  return n
}
