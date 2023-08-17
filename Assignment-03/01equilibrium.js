function equilibriumIndex(A)
{
    var totalSum=0
    var leftSum=0
  
    // Calculating the total sum of the array
    for(var i=0;i<A.length;i++)
    {
      totalSum+=A[i]
    }
    // Checking for equilibrium index
    for(var i=0;i<A.length;i++)
    {
      // Subtracting the current element from the total sum to get the right sum
      totalSum-=A[i]
  
      // Checking if left sum is equal to right sum
      if(leftSum===totalSum)
      {
        return i;// Equilibrium index found
      }
      // Adding the current element to the left sum
      leftSum+=A[i]
    }
    return -1; // No equilibrium index found
  }
    // Example usage
  var A=[-7,1,5,2,-4,3,0]
  var equilibriumIdx=equilibriumIndex(A)
  console.log("Equilibrium Index:",equilibriumIdx)