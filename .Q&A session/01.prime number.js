// print prime number up to 50
function primenum(num){
    for(let i=2;i<num;i++){
      if(num%i==0){
        return false
      }
    }
    return true
  }
  for(let i=1;i<=50;i++){
    if(primenum(i)){
      console.log(i)
    }
  }
  