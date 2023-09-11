/*2. Find the number of occurrences of a character in a String?*/

function countOccurrences(str,char){
    let count=0;
    for(let i=0;i<str.length;i++){
      if(str[i]===char){
        count++
      }
    }
    return count
  }


  
  let myString="Hello, World!"
  let character="l"
  let occurrences=countOccurrences(myString,character)
  console.log("Number of occurrences of ",character," : ",occurrences)
  
