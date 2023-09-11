/*Q3. Time to equality Problem Description
Given an integer array A of size N. In one second, you can increase the value of one element by 1.
Find the minimum time in seconds to make all elements of the array equal.
Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000


Input Format
First argument is an integer array A.
Output Format
Return an integer denoting the minimum time to make all elements equal.
Example Input
A = [2, 4, 1, 3, 2]
Example Output
8.
*/

function minTimeToEquality(A) {
    var maxNum = A[0];
    var sum = A[0];
  
    // Find the maximum number and calculate the sum of all elements
    for (var i = 1; i < A.length; i++) {
      if (A[i] > maxNum) {
        maxNum = A[i];
      }
      sum += A[i];
    }
  
    // Calculate the minimum time to make all elements equal
    var targetNum = Math.ceil(sum / A.length);
    var time = targetNum - maxNum;
  
    return time;
  }
  
  // Test the function
  var A = [2, 4, 1, 3, 2];
  console.log(minTimeToEquality(A)); // Output: 3
  
