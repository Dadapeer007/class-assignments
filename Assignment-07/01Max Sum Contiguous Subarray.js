function maxSubArraySum(A) {
    let maxSum=A[0];
    let currentSum=A[0];
   for(let i=1;i<A.length;i++)
    {
      currentSum=Math.max(A[i],currentSum+A[i]);
      maxSum=Math.max(maxSum,currentSum);
    } 
    return maxSum;
  }
  let A=[1,2,-10,4,2];
  let result=maxSubArraySum(A);
  console.log(result);