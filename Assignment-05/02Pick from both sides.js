/*Q2. Pick from both sides!
Problem Description
You are given an integer array A of size N.
You have to perform B operations. In one operation, you can remove either the 
leftmost or the rightmost element of the array A.Find and return the maximum 
possible sum of the B elements that were removed after the B operations.
NOTE: Suppose B = 3, and array A contains 10 elements, then you can:

Remove 3 elements from front and 0 elements from the back, OR
Remove 2 elements from front and 1 element from the back, OR
Remove 1 element from front and 2 elements from the back, OR
Remove 0 elements from front and 3 elements from the back.

Problem Constraints
1<=N<=10^5
1<=B<=N to 10^3<=A[i]<=10^3

Input Format
First argument is an integer array A.
Second argument is an integer B.

Output Format
Return an integer denoting the maximum possible sum of elements you removed.

Example Input
Input 1:
A=[5,-2,3,1,2]
B=3
Input 2:
A=[2,3,-1,4,2,1]
B=4
Example Output
Output1=8
Output2=9
Example Explanation

Explanation 1:
Remove element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
Explanation 2:
Remove the first element and the last 3 elements.So we get 2+4+2+1=9*/

function pickFromBothSides(A,B)
{
    const N=A.length;
    // Calculate the sum of the first B elements
    let maxSum=0;
    let currentSum=0;
    for(let i=0;i<B;i++)
    {
      currentSum+=A[i];
    }
    maxSum=currentSum;
  // Start removing elements from front and adding from the back
    let frontIndex=B-1;
    let backIndex=N-1;
    while(frontIndex>=0)
    {
      currentSum-=A[frontIndex];
      currentSum+=A[backIndex];
      maxSum=Math.max(maxSum,currentSum);
      frontIndex--;
      backIndex--;
    }
    return maxSum;
  }

  // Example usage
  let A=[5,-2,3,1,2]
  let B=3
  let result=pickFromBothSides(A,B)
  console.log(result)
