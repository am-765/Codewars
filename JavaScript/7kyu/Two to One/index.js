function longest(s1, s2) {
  return (s1 + s2)
    .split('')
    .sort()
    .filter((el, id, arr) => arr.indexOf(el) === id)
    .join('');
}
