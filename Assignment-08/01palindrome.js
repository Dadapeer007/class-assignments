/*1. Determine if a string/number is a palindrome?*/

function isPalindrome(input){
    let str=String(input)
    let length=str.length
    for(let i=0;i<length/2;i++){
      if(str[i]!==str[length-1-i]){
        return false
      }
    }
    return true
  }
  
  
  console.log(isPalindrome("radar"))
