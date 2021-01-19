var uniqueInOrder=function(iterable){
  return [...iterable].filter((el, id) => el !== iterable[id -1] )
}
