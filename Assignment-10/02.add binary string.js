/*Q2. Add Binary Strings
Problem Description
Given two binary strings A and B. Return their sum (also a binary string).

Problem Constraints
1 <= length of A <= 105
1 <= length of B <= 105
A and B are binary strings

Input Format
The two argument A and B are binary strings.

Output Format
Return a binary string denoting the sum of A and B

Example Input
Input 1:
A = "100"
B = "11"
Input 2:
A = "110"
B = "10"

Example Output
Output 1:
"111"
Output 2:
"1000"

Example Explanation
For Input 1:
The sum of 100 and 11 is 111.
For Input 2:
 
The sum of 110 and 10 is 1000.*/

function addBinaryStrings(A, B) {
    let i = A.length - 1;
    let j = B.length - 1;
    let carry = 0;
    let result = '';
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digitA = i >= 0 ? parseInt(A.charAt(i)) : 0;
      const digitB = j >= 0 ? parseInt(B.charAt(j)) : 0;
  
      const sum = digitA + digitB + carry;
      const currentDigit = sum % 2;
      carry = Math.floor(sum / 2);
  
      result = currentDigit + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // Example usage:
  const A = "100";
  const B = "11";
  const sum = addBinaryStrings(A, B);
  console.log(sum); // Output: "111"
  
