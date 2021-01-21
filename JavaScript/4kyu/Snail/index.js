snail = function(array) {
  let result = [];
  while (array.length) {
    result.push(...array.shift());
    array.map(cv => result.push(cv.pop()));
    array.reverse().map(cv => cv.reverse());
  }
  return result
}
