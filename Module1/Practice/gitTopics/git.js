let link = 'https://github.com/topics';
const request = require("request");
const cheerio = require("cheerio");
const processFileLink = require("./topicLink");
const fs = require("fs");

request(link, function(err, res, html){

    processHTML(html);
})



function processHTML(html){

    let ch = cheerio.load(html);

    let data = ch('.d-flex.flex-wrap.flex-justify-start li');

    let topics = ch(data).find(".f3");
    // console.log(data.length);
   

    for(let i=0; i<topics.length; i++){

         let oneTopic = ch(topics[i]).text().trim();
        // console.log(oneTopic);

         //create folders of three topics
         let folderPath ='./topics' + '/' + oneTopic;
         fs.mkdirSync(folderPath);


        //go to linl of 3 topics
        let OneTopicLink = link+ "/" + oneTopic
        //console.log(OneTopicLink);

        //go to OneTopicLink and make 10 files of projects
        processFileLink(OneTopicLink,oneTopic);

    }

}



