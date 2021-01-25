function tickets(peopleInLine) {
  let [$25, $50, $100] = [0, 0, 0];
  for (let val of peopleInLine) {
    switch (val) {
      case 25:
        $25++;
        break;
      case 50:
        $50++;
        $25--;
        break;
      case 100:
        $25--;
        $50 > 0 ? $50-- : ($25 -= 2);
        break;

      default:
        break;
    }
    if ($25 < 0 || $50 < 0) return "NO";
  }
  return "YES";
}
