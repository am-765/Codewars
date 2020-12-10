function tribonacci(signature, n){
  let tmpArr = signature;
  for (let i = 0; i < n; i++) {
    tmpArr.push(tmpArr.slice(-3).reduce((a, b) => a + b))
  }
  return tmpArr.slice(0, n)
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300,200,100], 0));
console.log(tribonacci([0.5,0.5,0.5], 30));
