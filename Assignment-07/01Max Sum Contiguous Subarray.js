/*Q1. Max Sum Contiguous Subarray
Problem Description
Find the maximum sum of contiguous non-empty 
subarray within an array A of length N.
Problem Constraints	
1<=N<=10^6 to 1000<=A[i]<=1000

Input Format
The first and the only argument contains an integer array, A.

Output Format
Return an integer representing the maximum possible
sum of the contiguous subarray.

Example Input
Input 1:A=[1,2,3,4,-10] 
Input 2:A=[-2,1,-3,4,-1,2,1,-5,4]

Example Output
Output1=10 
Output2=6 


Example Explanation
Explanation 1:
The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:
The subarray [4,-1,2,1] has the maximum possible sum of 6. */

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
