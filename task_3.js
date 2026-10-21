function whatCentury(year)
{
  var first=Number(year.substring(0,2));
  var last=Number(year.substring(2,4));
  var century;
  if(last==0){
    century=first;
  }
  else{
    century=first+1;
}
  if(century===11 || century===12 || century===13){
return century +"th";
  }
  var lastnum=century%10;
  if(lastnum===1){
    return century +"st";
  }
  if(lastnum===2){
    return century +"nd";
  }
  if(lastnum===3){
    return century +"rd";
  }
  return century+"th";
}
