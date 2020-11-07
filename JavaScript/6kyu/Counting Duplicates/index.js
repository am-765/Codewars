function duplicateCount(text) {
  const textArr = text.toLowerCase().split('');
  if (text.length === 0) {
    return 0
  } else {
    return textArr.filter((cv, i) => textArr.indexOf(cv) === i && textArr.lastIndexOf(cv) !== i).length;
  }
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
