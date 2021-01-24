function dirReduc(arr){
  let str = arr.join(''),
    pattern = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/;
  while (pattern.test(str)) {
    str = str.replace(pattern, '');
  }
  return str.match(/NORTH|SOUTH|EAST|WEST/g) || []
}
