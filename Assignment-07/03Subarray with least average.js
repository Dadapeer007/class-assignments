function subarrayWithLeastAverage(A,K) 
{
    if(A.length<K)
    {
      return -1; // Invalid input
    }
    let sum=0;
    for(let i=0;i<K;i++)
    {
      sum+=A[i];
    }
    let minAvg=sum/K;
    let minIndex=0;
  
    for(let i=K;i<A.length;i++)
    {
      sum=sum-A[i-K]+A[i];
      let currAvg=sum/K;
      if(currAvg<minAvg)
      {
        minAvg=currAvg;
        minIndex=i-K+1
      }
    }
    return minIndex;
  }
  // Example usage:
  const A=[3,7,90,20,10,50,40]
  const K=3
  const result=subarrayWithLeastAverage(A,K)
  console.log(result)