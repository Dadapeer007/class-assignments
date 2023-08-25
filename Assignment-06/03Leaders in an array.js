function findLeaders(A)
{
    let leaders=[];
    let max=A[A.length-1];
    leaders.push(max);

    for(let i=A.length-2;i>=0;i--)
    {
      if(A[i]>max)
      {
        leaders.push(A[i]);
        max=A[i];
      }
    }
    return leaders.reverse();
  }
  // Example usage
  let A=[16,17,33,19,21,4]
  let result=findLeaders(A)
  console.log(result)