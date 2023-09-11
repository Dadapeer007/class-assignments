/*Q1. Single Number
Problem Description
Given an array of integers A, every element appears twice except for one.
Find that integer that occurs once.NOTE: Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Problem Constraints
1 <= |A| <= 2000000
0 <= A[i] <= INTMAX

Input Format
The first and only argument of input contains an integer array A.

Output Format
Return a single integer denoting the single element.

Example Input
Input 1:
 A = [1, 2, 2, 3, 1]
Input 2:
 A = [1, 2, 2]

Example Output
Output 1:
 3
Output 2:
 1

Example Explanation
Explanation 1:
3 occurs once.
Explanation 2:
1 occurs once.*/

function findSingleNumber(A) {
    let result = 0;
  
    for (let i = 0; i < A.length; i++) {
      result ^= A[i];
    }
  
    return result;
  }
  
  // Example usage:
  const A = [1, 2, 2, 3, 1];
  const singleNumber = findSingleNumber(A);
  console.log(singleNumber);
  
