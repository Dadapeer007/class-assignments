/*Q3. Special Subsequences "AG"
Problem Description
You have given a string A having Uppercase English letters.
You have to find how many times subsequence "AG" is there in the given string.
NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

Problem Constraints
1 <= length(A) <= 10^5

Input Format
First and only argument is a string A.

Output Format
Return an integer denoting the answer.

Example Input
Input 1:
A = "ABCGAG"

Input 2:
A="GAB"

Example Output
Output1=3
Output2=0

Example Explanation
Explanation 1:
Subsequence "AG" is 3 times in given string 
Explanation 2:
There is no subsequence "AG" in the given string.*/


function countAGSubsequence(A)
{
    const MOD=1097
    let count=0
 // Iterate through the string
    for(let i=0;i<A.length;i++)
    {
      if(A[i]==='A')
      {
        // Count 'A' occurrences
        let remainingG=0;
        for(let j=i+1;j<A.length;j++)
        {
          if(A[j]==='G')
          {
            // Count 'G' occurrences after 'A'
            remainingG++;
          }
        }
        count=(count+remainingG)%MOD;
      }
    }
    return count;
  }
   // Example usage
  let A="ABCGAG"
  let result=countAGSubsequence(A)
  console.log(result)
