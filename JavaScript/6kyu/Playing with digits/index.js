function digPow(n, p) {
  const calc = n.toString().split('').map((cv, id)=> cv ** (p + id)).reduce((ac, cv) => ac + cv)
  return calc % n ? -1 : calc / n
}
