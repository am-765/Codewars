function findNextSquare(sq) {
  const x = Math.sqrt(sq);
  return x % 1 ? -1 : Math.pow(x + 1, 2);
}
