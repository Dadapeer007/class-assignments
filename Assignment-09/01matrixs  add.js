function addMatrices(A,B){
  let rows=A.length
  let cols=A.length
  let result=[]
  for(let i=0;i<rows;i++){
    let row=[]
    for(let j=0;j<cols;j++){
      row.push(A[i][j]+B[i][j])
    }
    result.push(row)
  }
  return result
}



let A=[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let B=[[9, 8, 7], [6, 5, 4], [3, 2, 1]]
let result=addMatrices(A,B)
console.log(result)
