function closestMinMaxSubarray(A)
{
    const N=A.length;
    let minIndex=-1;
    let maxIndex=-1;
    // Find the indices of the minimum and maximum values
    for(let i=0;i<N;i++)
    {
      if(minIndex===-1||A[i]<A[minIndex])
      {
        minIndex=i;
      }
      if(maxIndex===-1||A[i]>A[maxIndex])
      {
        maxIndex=i;
      }
    }
    // Calculate the size of the smallest subarray
    let smallestSubarraySize=Math.abs(maxIndex-minIndex)+1;
    return smallestSubarraySize
  }
  
  // Example usage
  let A=[1,3,2]
  let result=closestMinMaxSubarray(A)
  console.log(result)