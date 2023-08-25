function getColumnSums(A){
    const rows=A.length
    const cols=A[0].length
    const columnSums=[]
    for(let j=0;j<cols;j++){
      columnSums[j]=0
    }
    for(let j=0;j<cols;j++){
      for(let i=0;i<rows;i++){
        columnSums[j]+=A[i][j]
      }
    } 
    return columnSums
  }
  
  

  const A=[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 2, 3, 4]
  ]
  const result=getColumnSums(A)
  console.log(result)
  