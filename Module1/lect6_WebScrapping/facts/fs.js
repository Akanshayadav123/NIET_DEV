// go to NIET_WEB location in terminal
// npm init -y
// npm install cheerio
//add node_modules in .gitignore

const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");


let ch = cheerio.load(htmlKaData);

console.log(ch);

