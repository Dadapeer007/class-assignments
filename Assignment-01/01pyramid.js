let numRows=5;  // Number of rows in the pyramid
for(let i=1;i<=numRows;i++)
{
  let row='';// Add spaces before the asterisks
  for(let j=1;j<=numRows-i;j++)
  {
    row+=' ';
  }
  for(let k=1;k<=2*i-1;k++)
  {
    row+='*';
  }  
  console.log(row);
}