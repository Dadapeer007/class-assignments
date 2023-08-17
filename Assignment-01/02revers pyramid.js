let rows=5;
for(let i=rows;i>=1;i--)
{
  let pattern='';
// Add spaces before asterisks
  for(let j=1;j<=rows-i;j++)
  {
    pattern+=' ';
  }
// Add asterisks
  for(let k=1;k<=2*i-1;k++)
  {
    pattern+='*';
  }
  console.log(pattern);
}