function multiplyMatrices(A,B){
    const M=A.length
    const N=A[0].length 
    const P=B[0].length 
    const AB=new Array(M)
    for(let i=0;i<M;i++){
      AB[i]=new Array(P).fill(0)
    }
    for (let i=0;i<M;i++){
      for (let j=0;j<P;j++){
        for (let k=0;k<N;k++){
          AB[i][j]+=A[i][k]*B[k][j]
        }
      }
    }
    return AB
  }
  
  

  const A=[
    [1, 2],
    [3, 4]
  ]
  const B=[
    [5, 6],
    [7, 8]
  ]
  const result=multiplyMatrices(A,B)
  console.log(result)
  