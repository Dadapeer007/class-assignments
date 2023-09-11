/*Q2. Sum of All Subarrays
Problem Description
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which
we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.

Note : Be careful of integer overflow issues while calculations. Use appropriate datatypes.

Problem Constraints
1<=N<=10^5
1<=A[i]<=10^4

Input Format
The first argument is the integer array A.

Output Format
Return a single integer denoting the sum of all subarray sums of the given array.

Example Input
Input 1:A=[1,2,3]
Input 2:A=[2,1,3]

Example Output
Output1:20
Output2:19

Example Explanation
Explanation 1:
The different subarrays for the given array are:[1],[2],[3],[1,2],[2,3],[1,2,3].
Their sums are:1+2+3+3+5+6=20
Explanation 2:
The different subarrays for the given array are: [2],[1],[3],[2,1],[1,3],[2,1,3].
Their sums are: 2+1+3+3+4+6=19*/
    
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
