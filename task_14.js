function isCircleSorted( arr ){
  const n=arr.length;
  if(n<=2)return true;
  let deccount=0;
  for(let i=0;i<n;i++){
    if(arr[i]>arr[(i+1)%n]){
      deccount++;
    }
    if(deccount>1){
      return false;
}
  }
  return true;
}
