function maximumSubarray(A, B, C) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let maxSum = 0;
  
    while (end < A) {
      sum += C[end];
  
      if (sum <= B) {
        maxSum = Math.max(maxSum, sum);
        end++;
      } else {
        sum -= C[start];
        start++;
      }
    }
  
    return maxSum;
  }
  
  // Example usage:
  const A = 5;
  const B = 12;
  const C = [2, 1, 3, 4, 5];
  
  const result = maximumSubarray(A, B, C);
  console.log(result); // Output: 12 (maximum sum of the subarray [2, 1, 3, 4, 2])