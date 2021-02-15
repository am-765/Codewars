const sortDigits = n => {
  let arr = n.toString().split('');
  arr.sort((a, b) => b - a);
  return arr;
};

function nextBigger(n) {
  let arr = sortDigits(n);
  const max = parseInt(arr.join(''), 10);

  for (let i = n + 1; i <= max; i++) {
    if (sortDigits(i).every((a, b) => a === arr[b])) {
      return i;
    }
  }

  return -1;
}
