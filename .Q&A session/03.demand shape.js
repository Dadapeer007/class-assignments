let n=3
for(let i=1;i<=n;i++){
  let row='';
  // Adding spaces for the top pyramid
  for(let j=1;j<=n-i;j++){
    row+=' ';
  }
  // Adding asterisks for the top pyramid
  for (let j=1;j<=2*i-1;j++){
    row+='*';
  }
  console.log(row)
}
for(let i=n-1;i>=1;i--){
  let row='';
  // Adding spaces for the bottom reversed pyramid
  for(let j=1;j<=n-i;j++){
    row+=' ';
  }
  // Adding asterisks for the bottom reversed pyramid
  for(let j=1;j<=2*i-1;j++){
    row+='*';
  }
  console.log(row)
}