function substringSearch(string, pattern) {
  if(pattern.length>string.length){
    return -1
  }
  for(let i=0;i<=string.length-pattern.length;i++){
    let j
    for(j=0;j<pattern.length;j++){
      if(string[i+j]!==pattern[j]){
        break
      }
    }
    if(j==pattern.length){
      return i
    }
  }
  return -1
}



const string="dadapeer?"
const pattern="peer";
const index=substringSearch(string,pattern)
console.log(index==-1?"1":index)
