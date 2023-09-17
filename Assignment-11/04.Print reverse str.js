/*Q4. Print reverse string
Problem Description
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.
Problem Constraints
1 <= |s| <= 1000

Input Format
First line of input contains a string S.

Output Format
Print the character of the string S in reverse order.

Example Input
Input 1: scaleracademy
Input 2: cool

Example Output
Output 1: ymedacarelacs
Output 2: looc*/
function printReverse(string) {
    // Base case: If the string has only one character or is empty, print it
    if (string.length <= 1) {
      console.log(string);
    } else {
      // Print the last character of the string
      console.log(string[string.length - 1]);
      // Recursively print the remaining substring without the last character
      printReverse(string.slice(0, -1));
    }
  }
  
  // Test example
  let S = "scaleracademy";
  printReverse(S);
  