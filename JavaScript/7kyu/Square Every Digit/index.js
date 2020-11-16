function squareDigits(num){
  return Number(num.toString().split('').map(cv => cv * cv).join(''));
}
