/*8. How would you swap two numbers without using a third variable?*/

function swapNumbers(a,b){
    a=a^b
    b=a^b
    a=a^b
    return[a,b]
  }
  
  

  let num1=10
  let num2=5
  console.log("Before swapping: num1 =", num1, "num2 =",num2)
  let swappedNumbers=swapNumbers(num1,num2)
  num1=swappedNumbers[0]
  num2=swappedNumbers[1]
  console.log("After swapping: num1 =", num1, "num2 =", num2)
  
