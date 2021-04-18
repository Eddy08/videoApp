let baseUrl="https://www.googleapis.com/youtube/v3/";
// let key="key=AIzaSyBUr5hcuk4CKhKWrojKni2fd-Mvz-w10-c";
let key="key=AIzaSyAOlzlNVdQJBg_s5WvXUT2fTEVcYPCDLkA";
let key1="key=AIzaSyCE65vCleL5P4LSiBeQg-A8cRFJ8cSHmh4";//videoapp0008
let key2="key=AIzaSyB1FD2jXYz3lHDW0FFYvuHgcKecXqShzzM";//videoapph0008
let keyArray=[key,key1,key2];
let debugURL=baseUrl;
let maxResults=3;
let part="snippet";
let q="harsh";
let userInput;
let gettingVideo;
let newKey="newKey";
let newResult="📷";
let flag =0;
let flag1=0; //for new key
function setup() {
  // Main Method

// console.log(key+" "+key1+" "+key2)
console.log(process)
this. addNewKey= function(){
  // console.log(newKey)
  newKey=select('#newKeyValue');
  localStorage.setItem('newKey',newKey.value());
  console.log(newKey.value());
}


 this.gettingVideo=function(){
  userInput = select('#userInput');
  maxResult = select('#userResult');
  console.log(maxResult)
  q = userInput.value();
  maxResults = maxResult.value();

 let url=baseUrl;
   if (localStorage.getItem('newKey')) {
     newKeyLocally=localStorage.getItem('newKey');
     newKeys=newKeyLocally;
     url = baseUrl + "search?&key=" + newKeys + "&part=" + part + "&maxResults=" + maxResults + "&q=" + q;
    localStorage.setItem('debugURL', url);
  
   }
   else {
     url = baseUrl + "search?" + keyArray[Math.floor(Math.random() * keyArray.length)] + "&part=" + part + "&maxResults=" + maxResults + "&q=" + q;
    localStorage.setItem('debugURL', url);
   }
   loadJSON(url, (data) => {
    console.log(data);
    localStorage.setItem('api_data', JSON.stringify(data));
    newResult += JSON.stringify(data);

    flag = 1;
  }, 'jsonp')
 }

  
}
//test key AIzaSyAke72oaUVBnwithaOicHuYKJmWF3uGEhA
//videotest8000