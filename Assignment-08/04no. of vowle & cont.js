/*4. How do you calculate the number of vowels and consonants in a String?*/

function countVowelsAndConsonants(str){
    let vowels=0
    let consonants=0  
    for(let i=0;i<str.length;i++){
      let char=str[i]
      if(char>='a'&&char<='z'){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
          vowels++
        }else{
          consonants++
        }
      }
    }
    return{vowels:vowels,consonants:consonants}
  }
  
  

  let myString="dadapeer"
  let counts=countVowelsAndConsonants(myString)
  console.log("Number of vowels: "+counts.vowels)
  console.log("Number of consonants: "+counts.consonants)
  
