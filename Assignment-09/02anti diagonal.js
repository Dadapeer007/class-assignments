function getAntiDiagonals(A){
    const N=A.length
    const result=[]
    for(let i=0;i<2*N-1;i++){
      result.push([])
    }
    for(let i=0;i<N;i++){
      for(let j=0;j<N;j++){
        const antiDiagonalIndex=i+j;
        if(!result[antiDiagonalIndex]){
          result[antiDiagonalIndex]=[]
        }
        result[antiDiagonalIndex].push(A[i][j])
      }
    }
    for(let i=0;i<result.length;i++){
      const antiDiagonalLength=result[i].length;
      for(let j=antiDiagonalLength;j<N;j++){
        result[i].push(0)
      }
    } 
    return result
  }
  
  

  const A=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  const result=getAntiDiagonals(A)
  console.log(result)
  