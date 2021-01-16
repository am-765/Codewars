function iqTest(numbers){
  return numbers.split(' ').map(el => el % 2).map((cv, id, arr) => arr.indexOf(cv) === arr.lastIndexOf(cv) ? id : '').filter(el => el !== '')[0] + 1
}
