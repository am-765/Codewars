function isValidWalk(walk) {
  const getCount = (val) => walk.filter(el => el === val).length
  return walk.length === 10 && getCount('n') === getCount('s') && getCount('e') === getCount('w')
}
