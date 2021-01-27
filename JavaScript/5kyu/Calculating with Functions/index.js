function zero(s) {
  return !s ? 0 : s(0);
}
function one(s) {
  return !s ? 1 : s(1);
}
function two(s) {
  return !s ? 2 : s(2);
}
function three(s) {
  return !s ? 3 : s(3);
}
function four(s) {
  return !s ? 4 : s(4);
}
function five(s) {
  return !s ? 5 : s(5);
}
function six(s) {
  return !s ? 6 : s(6);
}
function seven(s) {
  return !s ? 7 : s(7);
}
function eight(s) {
  return !s ? 8 : s(8);
}
function nine(s) {
  return !s ? 9 : s(9);
}

function plus(n) {
  return m => m + n;
}
function minus(n) {
  return m => m - n;
}
function times(n) {
  return m => m * n;
}
function dividedBy(n) {
  return m => Math.floor(m / n);
}
