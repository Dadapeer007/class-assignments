/*Q5. Counting Subarrays Easy
Problem Description
Given an array A of N non-negative numbers and a non-negative number B,
you need to find the number of subarrays in A with a sum less than B.
We may assume that there is no overflow.

Problem Constraints
1 <= N <= 10^3
1 <= A[i] <= 1000
1 <= B <= 10^7

Input Format
First argument is an integer array A.
Second argument is an integer B.

Output Format
Return an integer denoting the number of subarrays in A having sum less than B.
Example Input
Input 1:
A=[2,5,6]
B=10

Input 2:
A=[1,11,2,3,15]
B=10

Example Output
Output1=4
Output2=4

Example Explanation
Explanation 1:
The subarrays with sum less than B are {2},{5},{6} and {2,5},
Explanation 2:
The subarrays with sum less than B are {1},{2},{3} and {2,3}*/

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
