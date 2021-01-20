snail = function(array) {
  let x = array.length,
    y = array.length,
    result = [];

  if (y === 1) {
    return array[0]
  }

  while (y > 1) {
    for (let i = 0; i < x; i++) {
      result.push(array[0][i]);
    }
    array.splice(0, 1);
    y--;

    for (let j = 0; j < y; j++) {
      result.push(array[j][y]);
      array[j].splice(y);
    }
    x--;

    for (let k = x - 1; 0 <= k; k--) {
      result.push(array[x - 1][k]);
    }
    array.splice(x - 1);
    y--;

    for (let l = y - 1; 0 <= l; l--) {
      result.push(array[l][0]);
      array[l].splice(0, 1);
    }
    x--;

    if (x === 1 && y === 1) {
      result.push(array[0][0])
    }
  }

  return result
}
