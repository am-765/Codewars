function printerError(s) {
  const error = (s.match(/[n-z]/g) || []).length;
  return `${error}/${s.length}`;
}
