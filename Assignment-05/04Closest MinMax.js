
/*Q4. Closest MinMaxProblem Description
Given an array A, find the size of the smallest subarray such that
it contains at least one occurrence of the maximum value of the array
and at least one occurrence of the minimum value of the array.

Problem Constraints
1<=|A|<=2000

Input Format
First and only argument is vector A

Output Format
Return the length of the smallest subarray which has at least one 
occurrence of minimum and maximum element of the array

Example Input
Input 1:
A=[1,3,2]
Input 2:
A=[2,6,1,6,9]
Example Output
Output1=2
Output2=3
Example Explanation
Explanation 1:
Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:
Take the last 3 elements of the array.*/

function closestMinMaxSubarray(A)
{
    const N=A.length;
    let minIndex=-1;
    let maxIndex=-1;
    // Find the indices of the minimum and maximum values
    for(let i=0;i<N;i++)
    {
      if(minIndex===-1||A[i]<A[minIndex])
      {
        minIndex=i;
      }
      if(maxIndex===-1||A[i]>A[maxIndex])
      {
        maxIndex=i;
      }
    }
    // Calculate the size of the smallest subarray
    let smallestSubarraySize=Math.abs(maxIndex-minIndex)+1;
    return smallestSubarraySize
  }
  
  // Example usage
  let A=[1,3,2]
  let result=closestMinMaxSubarray(A)
  console.log(result)
