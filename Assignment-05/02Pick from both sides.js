function pickFromBothSides(A,B)
{
    const N=A.length;
    // Calculate the sum of the first B elements
    let maxSum=0;
    let currentSum=0;
    for(let i=0;i<B;i++)
    {
      currentSum+=A[i];
    }
    maxSum=currentSum;
  // Start removing elements from front and adding from the back
    let frontIndex=B-1;
    let backIndex=N-1;
    while(frontIndex>=0)
    {
      currentSum-=A[frontIndex];
      currentSum+=A[backIndex];
      maxSum=Math.max(maxSum,currentSum);
      frontIndex--;
      backIndex--;
    }
    return maxSum;
  }

  // Example usage
  let A=[5,-2,3,1,2]
  let B=3
  let result=pickFromBothSides(A,B)
  console.log(result)