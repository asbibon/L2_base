function domainName(url){
  
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");
  
  let parts = url.split(".");
  
  return parts[0];
}
