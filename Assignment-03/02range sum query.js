function rangeSumQuery(A,B)
{
    var prefixSum=[]
    var prefixSumSum=0
    // Calculating prefix sum array
    for(var i=0;i<A.length;i++)
    {
      prefixSumSum+=A[i]
      prefixSum.push(prefixSumSum)
    }
    var result=[]
    // Calculating sum for each query
    for(var i=0;i<B.length;i++)
    {
      var left=B[i][0]
      var right=B[i][1]
      var sum=prefixSum[right]
      if(left>0)
      {
        sum-=prefixSum[left-1]
      }
      result.push(sum)
    }
    return result
  }
  // Example usage
  var A=[1,2,3,4,5]
  var B=[[0, 3], [1, 2]]
  var result=rangeSumQuery(A,B)
  console.log("Query Results:",result)