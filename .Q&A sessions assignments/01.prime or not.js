// the given number is prime or not
function prime(num){
    if(num<=1)
    return false 
    for(let i=2;i<=num/2;i++){
      if(num%i==0){
        return false
      }
    }
    return true
  }
  let num=3
  console.log(prime(num))