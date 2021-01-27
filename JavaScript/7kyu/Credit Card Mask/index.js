function maskify(cc) {
  return (
    cc
      .slice(0, -4)
      .split('')
      .map(cv => cv.replace(cv, '#'))
      .join('') + cc.slice(-4)
  );
}

console.log(maskify('4556364607935616'));
