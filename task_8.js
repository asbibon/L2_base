function expandedForm(num) {
  let str=String(num);
  let parts=[];
  for(let i=0;i<str.length;i++){
    if(str[i]!=='0'){
      let count=str.length-1-i;
      parts.push(str[i]+'0'.repeat(count));
    }
  }
  return parts.join(' + ');
}
