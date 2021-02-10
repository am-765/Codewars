function queueTime(customers, n) {
  let register = Array(n).fill(0);
  for (const val of customers) {
    const id = register.indexOf(Math.min(...register));
    register[id] += val;
  }
  return Math.max(...register);
}
