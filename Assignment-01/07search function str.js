function searchString(str,pattern)
{
    for(let i=0;i<=str.length-pattern.length;i++)
    {
      let match=true;
      for(let j=0;j<pattern.length;j++)
      {
        if(str[i+j]!==pattern[j])
        {
          match=false;
          break;
        }
      }    
      if(match)
      {
        return true;
      }
    }   
    return false;
  }
  
  let text="john";
  let searchTerm="jo";
  let isFound=searchString(text,searchTerm);
  console.log(isFound)