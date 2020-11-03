function highAndLow(numbers){
  const maxVal = numbers.split(' ').reduce((a, b) => Math.max(a, b));
  const minVal = numbers.split(' ').reduce((a, b) => Math.min(a, b));
  return `${maxVal} ${minVal}`;
}
