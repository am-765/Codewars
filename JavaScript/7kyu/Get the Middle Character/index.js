function getMiddle(s) {
  const strlen = s.length;
  const index = Math.ceil(strlen / 2) - 1
  return strlen % 2 ? s.substr(index, 1) : s.substr(index, 2);
}
