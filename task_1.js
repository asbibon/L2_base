function hasTwoCubeSums(n) {
  let count=0;
  const lim=Math.cbrt(n);
  for(let a=1;a<lim;a++){
    for(let b=a+1;b<=lim;b++){
      if(a**3+b**3===n){
        count++;
      }
      if(count===2){
        return true;
      }
    }
}
  return false;
}
