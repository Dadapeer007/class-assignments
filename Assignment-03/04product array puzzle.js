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