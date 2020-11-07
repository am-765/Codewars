function duplicateCount(text) {
  const textArr = text.toLowerCase().split('');
  if (text.length === 0) {
    return 0
  } else {
    return textArr.filter((cv, i) => textArr.indexOf(cv) === i && textArr.lastIndexOf(cv) !== i).length;
  }
}
