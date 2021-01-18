function iqTest(numbers){
  numbers = numbers.split(' ').map(Number);
  const odd = numbers.filter(el => el % 2);
  const even = numbers.filter(el => el % 2 === 0);
  return odd.length < even.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1
}
