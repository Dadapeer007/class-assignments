let array=[3,2,1]
let length=array.length
for(let i=0;i<length/2;i++)
{
  let temp=array[i]
  array[i]=array[length-1-i]
  array[length-1-i]=temp
}
console.log(array)