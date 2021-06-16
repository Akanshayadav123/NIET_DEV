const puppeteer = require("puppeteer");
const id ="cacifew931@beydent.com";
const pw = "password@123";
let tab;

let OpenChrome = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args:["--start-maximized"],
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
});

OpenChrome.then(function(browserInstance){

    let pagesPromise = browserInstance.pages();
    return pagesPromise;
})
.then(function(pages){

    tab = pages[0];
    let gotoPromise =tab.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
})
.then(function(){

    let idTypePromise = tab.type("#input-1", id);
    return idTypePromise;
})
.then(function(){

    let passTypePromise = tab.type("#input-2", pw);
    return passTypePromise;
})
.then(function(){

    let loginPromise = tab.click(".ui-btn.ui-btn-large ");
    return loginPromise;
})
.then(function(){

    let waitPromise = tab.waitForSelector('#base-card-1-link' , {visible:true});
    return waitPromise;
})
.then(function(){

        let ipKitClickedPromise =tab.click('#base-card-1-link');
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

    let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
     return allATagsPromise;
})
.then(function(){

    let allQuesLinksPromise = [];
    for(let i=0 ; i<allATags.length ; i++){
        
        let quesLinkPromise = tab.evaluate( function(elem){  return elem.getAttribute("href");   }  , allATags[i] );
        allQuesLinksPromise.push(quesLinkPromise);
        let combinedPromise = Promise.all(allQuesLinksPromise);
        return combinedPromise; //Promise<Pending>
    }
})
.then(function(allQuesLinks){
    console.log(allQuesLinks);
})
.catch(function(err){
    console.log("Inside catch");
    console.log(err);
})
