function digPow(n, p) {
  const calcResult = n.toString().split('').reduce((ac, cv, id) => ac + (Math.pow(cv, p + id)), 0);
  return calcResult % n ? -1 : calcResult / n
}
