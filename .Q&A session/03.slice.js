let str="hello";
let reversedStr="";

while(str.length>0) {
  reversedStr = reversedStr+str[str.length-1];
  str=str.slice(0,str.length-1);
}

console.log("Reversed string:",reversedStr);
