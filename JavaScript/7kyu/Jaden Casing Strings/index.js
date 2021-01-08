String.prototype.toJadenCase = function () {
  return this.split(' ').map(cv => cv.charAt(0).toUpperCase() + cv.slice(1)).join(' ')
};
