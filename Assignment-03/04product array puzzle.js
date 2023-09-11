/*Q4. Product array puzzle Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.
Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.
Input Format
The only argument given is the integer array A.
Output Format
Return the product array.
Constraints
2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example
Input 1:
A = [1, 2, 3, 4, 5]
Output 1:
[120, 60, 40, 30, 24]
Input 2:
A = [5, 1, 10, 1]
Output 2:
[10,50,5,50]*/

function productArrayPuzzle(A)
{
    var length=A.length
    var left=new Array(length)
    var right=new Array(length)
    var product=new Array(length)
    // Calculate the product of all elements to the left of each element
    left[0]=1
    for(var i=1;i<length;i++)
    {
      left[i]=left[i-1]*A[i-1]
    }
    // Calculate the product of all elements to the right of each element
    right[length-1]=1
    for(var i=length-2;i>=0;i--)
    {
      right[i]=right[i+1]*A[i+1]
    }
    // Calculate the product array by multiplying corresponding elements from left and right arrays
    for(var i=0;i<length;i++)
    {
      product[i]=left[i]*right[i]
    }
    return product
  }
    // Example usage
  var A=[1,2,3,4,5]
  var product=productArrayPuzzle(A)
  console.log("Product Array:",product)
