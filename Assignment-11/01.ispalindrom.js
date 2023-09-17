
/*Q1. Check Palindrome
Problem Description
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.
Note: A palindrome is a string that's the same when read forward and backward.

Problem Constraints
1 <= |A| <= 50000
String A consists only of lowercase letters.
Input Format
The first and only argument is a string A.

Output Format
Return 1 if the string A is a palindrome, else return 0.

Example Input
Input 1: A = "naman"
Input 2: A = "strings"

Example Output
Output 1: 1
Output 2: 0

Example Explanation
Explanation 1: "naman" is a palindomic string, so return 1.
Explanation 2: "strings" is not a palindrome, so return 0.*/

function isPalindrome(string) {
    // Base case: If the string has 0 or 1 character, it is a palindrome
    if (string.length <= 1) {
      return 1;
    }
  
    // Compare the first and last characters
    if (string[0] == string[string.length - 1]) {
      // Recursively check the substring without the first and last characters
      return isPalindrome(string.slice(1, -1));
    } else {
      // If the characters do not match, the string is not a palindrome
      return 0;
    }
  }
  
  // Test example
  let A = "naman";
  console.log(isPalindrome(A)); // Output: 1 (since "naman" is a palindrome)
  