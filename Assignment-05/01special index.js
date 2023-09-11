/*Q1. Special Index
Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing
an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

Problem Constraints
1<=n<=10^5 to 10^5<=A[i]<=10^5

Input Format
First argument contains an array A of integers of size N

Output Format
Return the count of array indices such that removing an element from these 
indices makes the sum of even-indexed and odd-indexed array elements equal.

Example Input
Input1:A=[2,1,6,4]
Input2:A=[1,1,1]

Example Output
Output1=1
Output2=3

Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1.
 
Explanation 2:
Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.*/

function countSpecialIndices(A)
{
    let count=0;
    let prefixSumEven=0;
    let prefixSumOdd=0;
    // Calculate the prefix sums of even-indexed and odd-indexed elements
    for(let i=0;i<A.length;i++)
    {
      if(i%2===0)
      {
        prefixSumEven+=A[i]
      }
      else
      {
        prefixSumOdd+=A[i]
      }
    }
    // Check each index if removing it results in equal sums
    for(let i=0;i<A.length;i++)
    {
      if(i%2===0)
      {
        prefixSumEven-=A[i]
      }
      else
      {
        prefixSumOdd-=A[i]
      }
      if(prefixSumEven===prefixSumOdd)
      {
        count++;
      }
      if(i%2===0)
      {
        prefixSumOdd+=A[i];
      }
      else
      {
        prefixSumEven+=A[i];
      }
    }
    return count;
  }
  // Example usage
  let A=[2,1,6,4]
  let result=countSpecialIndices(A)
  console.log(result)
