/*6. How do you reverse an array?*/

function reverseArray(arr){
    let start=0
    let end=arr.length-1
    while(start<end){
      let temp=arr[start]
      arr[start]=arr[end]
      arr[end]=temp
      start++
      end--
    }
    return arr
  }
  
  

  let myArray=[1,2,3,4,5]
  let reversedArray=reverseArray(myArray)
  console.log(reversedArray)  
