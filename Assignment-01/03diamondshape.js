let rows=5; // Number of rows in the diamond shape
// Upper half of the diamond
for(let i=1;i<=rows;i++)
{
  let row='';  
  // Add spaces before the asterisks
  for(let j=1;j<=rows-i;j++)
  {
    row+=' ';
  }  
  // Add asterisks
  for(let k=1;k<=2*i-1;k++)
  {
    row+='*';
  }
  console.log(row);
}
// Lower half of the diamond
for(let i=rows-1;i>=1;i--)
{
  let row='';
  // Add spaces before the asterisks
  for(let j=1;j<=rows-i;j++)
  {
    row+=' ';
  }
  // Add asterisks
  for(let k=1;k<=2*i-1;k++)
  {
    row+='*';
  }
  console.log(row);
}