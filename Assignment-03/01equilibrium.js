/*Q1:  equilibrium
Problem Description
You are given an array A of integers of size N.
Your task is to find the equilibrium index of the given array
The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.
Note:
Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.
constraints:
1 <= N <= 10^5
-10^5 <= A[i] <= 10^5
Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:
A = [1, 2, 3]

Example Output
Output 1:
3
Output 2:
-1
*/

function equilibriumIndex(A)
{
    var totalSum=0
    var leftSum=0
  
    // Calculating the total sum of the array
    for(var i=0;i<A.length;i++)
    {
      totalSum+=A[i]
    }
    // Checking for equilibrium index
    for(var i=0;i<A.length;i++)
    {
      // Subtracting the current element from the total sum to get the right sum
      totalSum-=A[i]
  
      // Checking if left sum is equal to right sum
      if(leftSum===totalSum)
      {
        return i;// Equilibrium index found
      }
      // Adding the current element to the left sum
      leftSum+=A[i]
    }
    return -1; // No equilibrium index found
  }
    // Example usage
  var A=[-7,1,5,2,-4,3,0]
  var equilibriumIdx=equilibriumIndex(A)
  console.log("Equilibrium Index:",equilibriumIdx)
