function countingSubarrays(A,B){
    let start=0
    let end=0
    let sum=0
    let count=0
    while(end<A.length){
      sum += A[end];
      while(sum>=B){
        sum-=A[start]
        start++
      }
      count+=end-start+1
      end++
    }
    return count
  }
  
  const A=[2,5,6]
  const B=10
  const result=countingSubarrays(A,B)
  console.log(result)