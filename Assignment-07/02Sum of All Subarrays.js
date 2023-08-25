function sumOfAllSubarraySums(A)
{
    const N=A.length;
    let sum=0; 
    for(let i=0;i<N;i++)
    {
      let num=A[i];
      let leftLength=i;
      let rightLength=N-i-1;
      let subarrayCount=(leftLength+1)*(rightLength+1);
      sum+=num*subarrayCount;
    } 
    return sum;
  }
  // Example usage
  let A=[1,2,3]
  let result=sumOfAllSubarraySums(A);
  console.log(result)