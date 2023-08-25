function alternatingSubarrays(A,B){
    const result=[];
    for(let i=B;i<A.length-B;i++){
      let valid=true;
      for(let j=i-B;j<=i+B;j++){
        if(A[j]==A[j+1]){
          valid=false;
          break;
        }
      }
      if(valid) {
        result.push(i)
      }
    }
    return result;
  }
  
  const A=[1,0,1,0,1]
  const B=1
  const result = alternatingSubarrays(A, B);
  console.log(result)