function findOutlier(integers) {
  let odd = integers.filter(a => a % 2);
  let even = integers.filter(a => a % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
}
