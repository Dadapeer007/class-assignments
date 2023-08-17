// Function to perform addition
function add(a,b)
{
    return a+b;
  }
  // Function to perform subtraction
  function subtract(a,b)
  {
    return a-b;
  }
  // Function to perform multiplication
  function multiply(a,b)
  {
    return a*b;
  }  
  // Function to perform division
  function divide(a,b)
  {
    if(b!==0)
    {
      return a/b;
    }
    else
    {
      return;
    }
  }
  
  // Get user input for two integers
  var num1 = 6
  var num2 = 8
  
  // Perform calculations and display the results
  console.log("Sum:", add(num1, num2));
  console.log("Difference:", subtract(num1, num2));
  console.log("Product:", multiply(num1, num2));
  console.log("Quotient:", divide(num1, num2));