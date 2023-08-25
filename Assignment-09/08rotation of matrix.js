function rotateMatrix(A){
    const n=A.length
    for(let layer=0;layer<Math.floor(n/2);layer++){
      const first=layer
      const last=n-1-layer
      for(let i=first;i<last;i++){
        const offset=i-first
        const top=A[first][i]
        A[first][i]=A[last-offset][first]
        A[last-offset][first]=A[last][last-offset]
        A[last][last-offset]=A[i][last]
        A[i][last]=top
      }
    } 
    return A
  }
  
  

  const A=[
    [1, 2],
    [3, 4]
  ]
  const result=rotateMatrix(A);
  console.log(result)
  