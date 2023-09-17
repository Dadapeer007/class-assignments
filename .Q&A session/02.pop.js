let array = [1,2,3];
let reversearr=[];
let temp=[];
while (array.length > 0) {
  temp=array.pop()
  reversearr=reversearr+temp;
}

console.log("Reversed string:", reversearr);
console.log(typeof reversearr)