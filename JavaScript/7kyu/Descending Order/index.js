function descendingOrder(n){
  return Number(n.toString().split('').map(Number).sort((x, y) => y - x).join(''));
}
