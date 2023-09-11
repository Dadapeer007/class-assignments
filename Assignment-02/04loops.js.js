/* Function to print array values using a for loop*/

function printArrayForLoop(arr)
{
    for(var i=0;i<arr.length;i++)
    {
      console.log(arr[i])
    }
  }
  // Function to print array values using a while loop
  function printArrayWhileLoop(arr)
  {
    var i=0;
    while(i<arr.length)
    {
      console.log(arr[i])
      i++;
    }
  }
  // Example usage
  var myArray=[1,2,3,4,5]
  console.log("Printing array using a for loop:")
  printArrayForLoop(myArray)
  console.log("Printing array using a while loop:")
  printArrayWhileLoop(myArray)
