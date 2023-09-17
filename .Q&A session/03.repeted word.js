let sentence="hi vikram hi"
let inputWord="hi"
let words=sentence.split(" ");
let count=0;
    
    for(let i=0;i<words.length;i++) {
      if (words[i]==inputWord){
        count++;
      }
    }
  console.log(words)
  console.log("The word " + inputWord + " appears " + count + " times.");
  