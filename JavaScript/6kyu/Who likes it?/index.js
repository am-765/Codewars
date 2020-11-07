function likes(names) {
  const len = names.length;
  const sen1 = 'likes this';
  const sen2 = 'like this';

  switch (len) {
    case 0:
      return `no one ${sen1}`;
      break;

    case 1:
      return names[0] + ` ${sen1}`;
      break;

    case 2:
      return names[0] + ` and ` + names[1] + ` ${sen2}`;
      break;

    case 3:
      return names[0] + `, ` + names[1] + ` and ` + names[2] + ` ${sen2}`;
      break;

    default:
      return names[0] + `, ` + names[1] + ` and ` + (len - 2) + ` others ${sen2}`;
      break;
  }
}
