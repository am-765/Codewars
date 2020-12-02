function findShort(s) {
  return Math.min(...s.split(' ').map(el => el.length))
}
