/*3. How to find out if the given two strings are anagrams or not?*/

function areAnagrams(str1,str2){
  if(str1.length!==str2.length){
    return false
  }
  const arr1=Array.from(str1).sort()
  const arr2=Array.from(str2).sort()
  for (let i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
      return false
    }
  }
  return true
}



const string1="book"
const string2="oobk"
const result=areAnagrams(string1,string2)
console.log(result)
