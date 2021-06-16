const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let link = "https://niet.instituteoncloud.com/AcademicsUpload/NoticeView";

request(link, function(err, res, html){
    processHtml(html);
})

function processHtml(data){

    let ch = cheerio.load(data);
    
}