/*Q4. Maximum Subarray Easy
Problem Description
You are given an integer array C of size A. Now you need to 
find a subarray (contiguous elements) so that the sum of
contiguous elements is maximum.But the sum must not exceed B.

Problem Constraints
1 <= A <= 10^3
1 <= B <= 10^9
1 <= C[i] <= 10^6

Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.
Output Format
Return a single integer which denotes the maximum sum.

Example Input
Input1:
A=5
B=12
C=[2,1,3,4,5]

Input2:
A=3
B=1
C=[2,2,2]

Example Output
Output1:12
Output2:0

Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
Explanation 2:
All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0.*/

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
