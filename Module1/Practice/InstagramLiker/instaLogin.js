const puppeteer = require("puppeteer");
const id = "cacifew931@beydent.com";
const pw = "password@123";
const acc = "pepcoding";


(async function (){



    try{
        let browser = await puppeteer.launch({

            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
            executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        });
    
         let pages =await browser.pages();
         let tab = pages[0];
         await tab.goto("https://www.instagram.com");
         await tab.waitForSelector('input[name= "username" ]');
         await tab.type('input[name="username"]', id);
         await tab.waitForSelector('input[name="password"]');
         await tab.type('input[name="password"]', pw);
         await tab.click(".sqdOP.L3NKy.y3zKF");
         await tab.waitForTimeout("5000");
         await tab.waitForSelector(".sqdOP.yWX7d.y3zKF" , {visible : true});
         await tab.click(".sqdOP.yWX7d.y3zKF");
         await tab.waitForSelector(".aOOlW.HoLwm", {visible:true});
         await tab.click(".aOOlW.HoLwm");
         await tab.waitForSelector(".eyXLr.wUAXj", {visible : true});
         await tab.click(".eyXLr.wUAXj");
         await tab.waitForTimeout("3000");
         await tab.type(".XTCLo.x3qfX",acc);
         await tab.waitForSelector('div[role="none"] > a',  {visible : true});
         let allPagesTag = await tab.$$('div[role="none"] > a');
         let pageLink = await tab.evaluate(function(elem){ return elem.getAttribute("href") },allPagesTag[0]);
         let completeLink = "https://www.instagram.com" + pageLink;
         //console.log(completeLink);
         await tab.waitForTimeout("5000");
         await tab.goto(completeLink);

           


        
         
         
         for(let i=0; i<10; i++){

            await tab.waitForSelector(".v1Nh3.kIKUG._bz0w > a",  {visible : true});
            let allPostATag = await tab.$$(".v1Nh3.kIKUG._bz0w > a");

           
            let onePostLink = await tab.evaluate(function(elem) {return elem.getAttribute("href")} , allPostATag[i]);
            let complete1PostLink = "https://www.instagram.com" + onePostLink;
            await tab.goto(complete1PostLink);
            await tab.waitForSelector(".fr66n>.wpO6b" ,{visible: true});
            await tab.click(".fr66n>.wpO6b");
            await tab.waitForTimeout("2000");
            await tab.goto(completeLink);
            
         }
         

         
        //  let onePostLink = await tab.evaluate(function(elem) {return elem.getAttribute("href")} , allPostATag[0]);
        //  let complete1PostLink = "https://www.instagram.com" + onePostLink;
        //  await tab.goto(complete1PostLink);
        //  await tab.waitForSelector(".fr66n>.wpO6b" ,{visible: true});
        //  await tab.click(".fr66n>.wpO6b");
        //  await tab.goto(completeLink);
        
    }

    catch(err){
          console.log(err);
    }

  
})();

