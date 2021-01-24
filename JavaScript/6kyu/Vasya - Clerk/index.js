function tickets(peopleInLine) {
  const dollars = {
    x: 0,
    y: 0,
    z: 0
  };

  for (const iterator of peopleInLine) {
    switch (iterator) {
      case 25:
        dollars.x++;
        break;

      case 50:
        if (dollars.x >= 1) {
          dollars.x--;
          dollars.y++;
        } else {
          return "NO";
        }
        break;

      case 100:
        if (dollars.x >= 1 && dollars.y >= 1) {
          dollars.x--;
          dollars.y--;
          dollars.z++;
        } else if (dollars.x >= 3) {
          dollars.x -= 3;
          dollars.z++;
        } else {
          return "NO";
        }
        break;

      default:
        break;
    }
  }
  return "YES";
}

console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
