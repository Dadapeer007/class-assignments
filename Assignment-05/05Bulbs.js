function bulbs(A)
{
    let switches=0;
    let state=0;
    for(let i=0;i<A.length;i++)
    {
      if(A[i]===state)
      {
        switches++;
        state=1-state
      }
    }
    return switches
  }
  // Example usage
  let A=[0,1,0,1]
  let result=bulbs(A)
  console.log(result)