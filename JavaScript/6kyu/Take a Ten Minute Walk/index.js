function isValidWalk(walk) {
  if (walk.length === 10) {
    const n = walk.join('').match(/[n]/gi).length
    const s = walk.join('').match(/[s]/gi).length
    const e = (walk.join('').match(/[e]/gi) || []).length
    const w = (walk.join('').match(/[w]/gi) || []).length
    return n === s && e === w ? true : false
  } else {
    return false
  }
}
