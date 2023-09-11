/* Function to calculate the sum of array values using a for loop*/

function sumArrayForLoop(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
      sum+=arr[i];
    }
    return sum;
  }
// Function to calculate the sum of array values using a while loop
  function sumArrayWhileLoop(arr)
  {
    var sum=0
    var i=0
    while(i<arr.length)
    {
      sum+=arr[i]
      i++;
    }
    return sum
  }
   // Example usage
  var myArray=[1,2,3,4,5]
  console.log("Sum of array using a for loop:",sumArrayForLoop(myArray))
  console.log("Sum of array using a while loop:",sumArrayWhileLoop(myArray))
