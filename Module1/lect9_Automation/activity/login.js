const puppeteer = require("puppeteer");
const id ="cacifew931@beydent.com";
const pw = "password@123";
let tab;
// puppeteer functions => promisifed functions

// open a browser

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  });
  
  browserOpenPromise.then(function (browserInstance) {
      let pagesPromise = browserInstance.pages();
      return pagesPromise; // Promise<Pending>
    })
    .then(function (pages) {
      let page = pages[0];
      tab = page;
      let gotoPromise = tab.goto("https://www.hackerrank.com/auth/login");
      return gotoPromise;
    })
    .then(function(){
        let idTypePromise = tab.type("#input-1" , id);
        return idTypePromise;
    })
    .then(function(){
        let pwTypePromise = tab.type("#input-2" , pw);
        return pwTypePromise;
    })
    .then(function(){
        let loginPromise = tab.click('.ui-btn.ui-btn-large');
        return loginPromise;
    })
    .then(function(){
      //   wait for selector
      let waitPromise = tab.waitForSelector('#base-card-1-link' , {visible:true});
      return waitPromise;
    })
    .then(function(){
        let ipKitClickedPromise = tab.click('#base-card-1-link');
        return ipKitClickedPromise;
    })
    .then(function(){
        let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]' , {visible:true});
        return waitPromise;
    })
    .then(function(){
        let warmupChallengesPromise = tab.click('a[data-attr1="warmup"]');
        return warmupChallengesPromise;
    })
    .then(function(){
        let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item');
        return waitPromise;
    })
    .then(function(){
        //$$ is used for query selector
        let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
        return allATagsPromise;
    })
    .then(function(allATags){
        //[<a href=""></a> , <a ></a> , <a></a> , <a></a> ];
        let allQuesLinksPromise = [];
        for(let i=0 ; i<allATags.length ; i++){
            //evaluate m ek callback pass hota h or ek variable us variable ko vo callback m pass krta h or frr hm us 
            //callback function k andr koi b dom ka function chla skte h
            let quesLinkPromise = tab.evaluate( function(elem){  return elem.getAttribute("href");   }  , allATags[i] );
            allQuesLinksPromise.push(quesLinkPromise);
        }
      //   allQuesLinkPromise = [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
      //Promise.all rk array k sare promises jb tk data naa leaye tb tk nhi chlta or ye array k sare 
      //elements k lye common promise hota h
      let combinedPromise = Promise.all(allQuesLinksPromise);
      return combinedPromise; //Promise<Pending>
    })
    .then(function(allQuesLinks){
        console.log(allQuesLinks);
    })
    .catch(function(err){
        console.log("Inside catch");
        console.log(err);
    })