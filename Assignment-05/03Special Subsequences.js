function countAGSubsequence(A)
{
    const MOD=1097
    let count=0
 // Iterate through the string
    for(let i=0;i<A.length;i++)
    {
      if(A[i]==='A')
      {
        // Count 'A' occurrences
        let remainingG=0;
        for(let j=i+1;j<A.length;j++)
        {
          if(A[j]==='G')
          {
            // Count 'G' occurrences after 'A'
            remainingG++;
          }
        }
        count=(count+remainingG)%MOD;
      }
    }
    return count;
  }
   // Example usage
  let A="ABCGAG"
  let result=countAGSubsequence(A)
  console.log(result)