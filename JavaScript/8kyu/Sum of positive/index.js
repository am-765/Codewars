function positiveSum(arr) {
  const positiveInt = arr.filter(el => el > 0)
  return positiveInt.length === 0 ? 0 : positiveInt.reduce((ac, cv) => ac + cv)
}
