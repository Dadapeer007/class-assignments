/*Create a calculator using function for each operation - sum, subtraction, multiplication and division of 2 integers provided by user*/

// Function to add two numbers
function add(num1,num2)
{
  return num1+num2
}
// Function to subtract two numbers
function subtract(num1,num2)
{
  return num1-num2
}
// Function to multiply two numbers
function multiply(num1,num2)
{
  return num1*num2
}
// Function to divide two numbers
function divide(num1,num2)
{
  if(num2===0)
  {
    return;
  }
  return num1/num2
}

// Example usage
var number1=2
var number2=4

console.log("Addition:",add(number1,number2))
console.log("Subtraction:",subtract(number1,number2))
console.log("Multiplication:",multiply(number1,number2))
console.log("Division:",divide(number1,number2))
