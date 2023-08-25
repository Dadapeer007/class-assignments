function goodSubarrays(A,B){
    let start=0
    let end=0
    let count=0 
    while(end<A.length){
      // Check if the current subarray length is even and its sum is less than B
      if((end-start+1)%2==0&&sumSubarray(A,start,end)<B){
        count++
      }
      // Check if the current subarray length is odd and its sum is greater than B
      if((end-start+1)%2==1&&sumSubarray(A,start,end)>B){
        count++
      }
      end++;
    }
    return count;
  }
  // Helper function to calculate the sum of a subarray
  function sumSubarray(A,start,end){
    let sum=0
    for(let i=start;i<=end;i++){
      sum+=A[i]
    }
    return sum
  }
  
  
  const A=[1,2,3,4,5]
  const B=4
  const result=goodSubarrays(A,B)
  console.log(result)