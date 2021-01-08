function findEvenIndex(arr) {
  let left = 0,
    right = arr.reduce((ac, cv) => ac + cv, 0)

  for (let i = 0; i < arr.length; i++) {
    if (0 < i) {
      left += arr[i - 1];
    }

    right -= arr[i];

    if (left === right) {
      return i
    }
  }

  return -1
}
