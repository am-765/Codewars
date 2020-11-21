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

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
