function findMissing(list) {  
  const totalCount=list.length+1;
  const firstEl=list[0];
  const lastEl=list[list.length-1];
  const ideaSum=(totalCount*(firstEl+lastEl))/2;
  const realSum=list.reduce((sum,num)=>sum+num,0)
  return ideaSum-realSum;
}
