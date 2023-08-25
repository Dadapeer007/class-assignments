function addMatrices(A,B){
    let rows=A.length
    let cols=A[0].length
    let result=[]
    for(let i=0;i<rows;i++){
      let row=[]
      for(let j=0;j<cols;j++){
        row.push(A[i][j]-B[i][j])
      }
      result.push(row)
    } 
    return result
  }
  
  

  let A=[[1, 2, 3],[4, 5, 6],[7, 8, 9]]
  let B=[[1, 2, 3],[4, 5, 6],[7, 8, 9]];
  let result=addMatrices(A,B)
  console.log(result)