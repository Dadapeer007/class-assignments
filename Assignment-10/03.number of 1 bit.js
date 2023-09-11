/*Q3. Number of 1 Bits
Problem Description
Write a function that takes an integer and returns
the number of 1 bits present in its binary representation.

Problem Constraints
1 <= A <= 109
Input Format
First and only argument contains integer A

Output Format
Return an integer

Example Input
Input 1:11
Input 2:6

Example Output
Output 1:3
Output 2:2

Example Explanation
Explaination 1:
11 is represented as 1011 in binary.
Explaination 2:
6 is represented as 110 in binary.*/

function countOneBits(A) {
    let count = 0;
    while (A > 0) {
      // Check the rightmost bit and increment count if it is 1
      count += A & 1;
      // Right shift A to move to the next bit
      A >>= 1;
    }
    return count;
  }
  
  // Example usage:
  console.log(countOneBits(11)); // Output: 3 (11 in binary is 1011, it has 3 one bits)
  
  
