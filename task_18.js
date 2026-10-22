function createPhoneNumber(numbers){
  let code=numbers.slice(0,3).join('');
  let first=numbers.slice(3,6).join('');
  let second=numbers.slice(6,10).join('');
  return '('+code+')'+' '+first+'-'+second;
}
