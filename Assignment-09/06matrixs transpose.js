function findTranspose(A){
    const rows=A.length
    const cols=A[0].length
    const transpose=new Array(cols)
    for(let i=0;i<cols;i++){
      transpose[i]=new Array(rows).fill(0);
    } 
    for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
        transpose[j][i]=A[i][j]
      }
    } 
    return transpose
  }
  
  

  const A=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  const result=findTranspose(A)
  console.log(result)
  