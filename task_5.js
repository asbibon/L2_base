function primeFactors(n){
  let res='';
  let div=2;
  while(div*div<=n){
    let count=0;
    while(n%div===0){
    count++;
    n/=div;
    }
    if(count>0){
      if(count===1){
        res+='('+div+')';
      }
      else{
        res+='('+div+'**'+count+')';
      }
}
div++;
}
    if(n>1){
      res+='('+n+')';
}
 return res;
}
