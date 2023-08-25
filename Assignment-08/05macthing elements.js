function findRepeatedElements(arr){
  let repeatedElements=[];
  let frequency={}
  for(let i=0;i<arr.length;i++){
    let element=arr[i]
    if(repeatedElements.includes(element)){
      continue
    }
    let count=0
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]==element){
        count++
      }
    }
    if(count>0){
      repeatedElements.push(element)
      frequency[element]=count+1
    }
  }
  return{repeatedElements:repeatedElements,frequency:frequency}
}



let myArray=[1,2,3,2,4,1,5,2,6,5]
let result=findRepeatedElements(myArray)
console.log("Repeated elements: ",result.repeatedElements)
console.log("Frequency: ", result.frequency)
