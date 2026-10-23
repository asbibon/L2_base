function toWeirdCase(string){
let words=string.split(" ");
  let result=[];
  for(let i=0;i<words.length;i++){
let word=words[i];
    let newword="";
    for(let j=0;j<word.length;j++){
if(j%2===0){
newword+=word[j].toUpperCase();
  }
else{newword += word[j].toLowerCase();
    }
}
     result.push(newword);
    }
return result.join(" ");
}
