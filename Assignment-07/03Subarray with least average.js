/*Q3. Subarray with least average
Problem Description
Given an array of size N, find the subarray of size K with the least average.
Problem Constraints
1<=k<=N<=10^5 to 10^5<=A[i]<=10^5

Input Format
First argument contains an array A of integers of size N.
Second argument contains integer k.

Output Format
Return the index of the first element of the subarray of size k that has least average.
Array indexing starts from 0.

Example Input
Input1:
A=[3,7,90,20,10,50,40]
B=3

Input2:
A=[3,7,5,20,-10,0,12]
B=2

Example Output
Output1:3
Output2:4

Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20,10,50} has the least average 
among all subarrays of size 3.
Explanation 2:
Subarray between [4,5] has minimum average.*/

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
