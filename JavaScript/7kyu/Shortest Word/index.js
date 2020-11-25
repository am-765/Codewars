function findShort(s) {
  return s.split(' ').map(word => word.length).reduce((a, b) => Math.min(a, b))
}
