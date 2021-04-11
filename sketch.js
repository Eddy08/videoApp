let baseUrl="https://www.googleapis.com/youtube/v3/";
// let key="key=AIzaSyBUr5hcuk4CKhKWrojKni2fd-Mvz-w10-c";
let key="key=AIzaSyAOlzlNVdQJBg_s5WvXUT2fTEVcYPCDLkA";

let maxResults=3;
let part="snippet";
let q="harsh";
let userInput;
let gettingVideo;
let newResult="📷";
let flag =0;
function setup() {
  // Main Method


 this.gettingVideo=function(){
    userInput=select('#userInput');
    maxResult=select('#userResult');
  
    q=userInput.value();
    maxResults=maxResult.value();
    let url =baseUrl+ "search?"+key+"&part="+part+"&maxResults="+maxResults+"&q="+q;
    console.log(url)
    loadJSON(url,(data)=>{
      console.log(data);
      localStorage.setItem('api_data',JSON.stringify(data));
      newResult+=JSON.stringify(data);
      
      flag=1;
    },'jsonp')

  }

  
}
