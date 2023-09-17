
/*Q5. Sum of Digits!
Problem Description
Given a number A, we need to find the sum of its digits using recursion.

Problem Constraints
1 <= A <= 10^9

Input Format
The first and only argument is an integer A.

Output Format
Return an integer denoting the sum of digits of the number A.

Example Input
Input 1: A = 46
Input 2: A = 11

Example Output
Output 1: 10
Output 2: 2


Example Explanation

Explanation 1:
Sum of digits of 46 = 4 + 6 = 10

Explanation 2:
Sum of digits of 11 = 1 + 1 = 2*/

function sumOfDigits(A) {
    // Base case: If the number has only one digit, the sum is the digit itself
    if (A < 10) {
      return A;
    } else {
      // Extract the last digit of the number and add it to the sum
      const lastDigit = A % 10;
      // Recursively calculate the sum of the remaining digits without the last digit
      return lastDigit + sumOfDigits(Math.floor(A / 10));
    }
  }
  
  // Test example
  let A = 46;
  console.log(sumOfDigits(A)); // Output: 10 (4 + 6 = 10)
  