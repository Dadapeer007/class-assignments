function generateMatrix(A){
    const matrix=new Array(A)
    for(let i=0;i<A;i++){
      matrix[i]=new Array(A)
    }  
    let num=1
    let top=0,
      bottom=A-1,
      left=0,
      right=A-1 
    while(top<=bottom&&left<=right){
      for(let i=left;i<=right;i++){
        matrix[top][i]=num++
      }
      top++ 
      for(let i=top;i<=bottom;i++){
        matrix[i][right]=num++
      }
      right--
      for(let i=right;i>=left;i--){
        matrix[bottom][i]=num++
      }
      bottom--
      for(let i=bottom;i>=top;i--){
        matrix[i][left]=num++
      }
      left++
    }
    return matrix
  }
  


  const A=2
  const result=generateMatrix(A)
  console.log(result)