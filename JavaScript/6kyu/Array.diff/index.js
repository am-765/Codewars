function arrayDiff(a, b) {
  return a.filter(cv => b.indexOf(cv) === -1)
}
