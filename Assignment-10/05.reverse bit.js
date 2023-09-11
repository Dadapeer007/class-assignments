/*Q5. Reverse Bits
Problem Description
Reverse the bits of an 32 bit unsigned integer A.

Problem Constraints
0 <= A <= 232

Input Format
First and only argument of input contains an integer A.

Output Format
Return a single unsigned integer denoting the decimal value of reversed bits.

Example Input
Input 1:0
Input 2:3

Example Output
Output 1: 0
Output 2: 3221225472

Example Explanation

Explanation 1:

00000000000000000000000000000000    
00000000000000000000000000000000
Explanation 2:

00000000000000000000000000000011    
11000000000000000000000000000000*/

function reverseBits(A) {
    let reversedNumber = 0;
    for (let i = 0; i < 32; i++) {
      // Shift the reversedNumber to the left (by 1) to make space for the next bit
      reversedNumber <<= 1;
      // Check if the rightmost bit of A is set (1)
      if (A & 1) {
        // If it is set, set the rightmost bit of reversedNumber (1)
        reversedNumber |= 1;
      }
      // Right shift A to move to the next bit
      A >>= 1;
    }
    return reversedNumber;
  }
  
  // Example usage:
  const A = 0;
  console.log(reverseBits(A)); // Output: 0
  
