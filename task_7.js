function wave(str){
  let result=[];
  for(let i=0;i<str.length;i++){
    if(str[i]===' '){
      continue;
    }
    let letters=str.split('');
    letters[i]=letters[i].toUpperCase();
    result.push(letters.join(''));
}
  return result;
}
