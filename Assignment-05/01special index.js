function countSpecialIndices(A)
{
    let count=0;
    let prefixSumEven=0;
    let prefixSumOdd=0;
    // Calculate the prefix sums of even-indexed and odd-indexed elements
    for(let i=0;i<A.length;i++)
    {
      if(i%2===0)
      {
        prefixSumEven+=A[i]
      }
      else
      {
        prefixSumOdd+=A[i]
      }
    }
    // Check each index if removing it results in equal sums
    for(let i=0;i<A.length;i++)
    {
      if(i%2===0)
      {
        prefixSumEven-=A[i]
      }
      else
      {
        prefixSumOdd-=A[i]
      }
      if(prefixSumEven===prefixSumOdd)
      {
        count++;
      }
      if(i%2===0)
      {
        prefixSumOdd+=A[i];
      }
      else
      {
        prefixSumEven+=A[i];
      }
    }
    return count;
  }
  // Example usage
  let A=[2,1,6,4]
  let result=countSpecialIndices(A)
  console.log(result)