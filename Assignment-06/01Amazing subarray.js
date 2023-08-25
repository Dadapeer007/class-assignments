function countAmazingSubstrings(S)
{
    const vowels=new Set(['a','e','i','o','u','A','E','I','O','U']);
    let count=0;
     for(let i=0;i<S.length;i++)
    {
      if(vowels.has(S[i]))
      {
        count+=S.length-i;
      }
    }
  return count
  }
  // Example usage
  let S="ABEC";
  let result=countAmazingSubstrings(S);
  console.log(result);// Output:6