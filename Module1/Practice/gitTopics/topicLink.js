//let link = "https://github.com/topics/opengl";
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function processFileLink(link,oneTopic){

request(link, function(err, res, html){

    processHtml(html,oneTopic);
})
}


function processHtml(data,oneTopic){

    let ch = cheerio.load(data);
     
    

    //let allProjects = ch('.f3 a.text-bold');
    let Projects = ch("article .d-flex.flex-auto");
    
    let allProjects = ch(Projects).find('h1');
    
    let folderPath = "./topics/" + oneTopic;

    for(let i=0; i<10; i++){
        
        //let oneProject = ch(allProjects[i]).text().trim();
        //console.log(oneProject);
       // console.log(issue[i]);



       let projectArr = ch(allProjects[i]).text().trim().split("\n");    
      // console.log(oneProject);

      //0
      let beforeSlash = projectArr[0];
      //console.log(beforeSlash);
      //3
      let afterSlash = projectArr[3].trim();
      //console.log(afterSlash);

      fs.mkdirSync(folderPath + '/'+ afterSlash);

      
      let issueLink = `https://github.com/${beforeSlash}/${afterSlash}/issues`;
      let jsonFileLink = folderPath + "/" + afterSlash +"/issues.json";
      getIssueData(issueLink, jsonFileLink);   

    }
}



function getIssueData(issueLink,jsonFileLink){
    request(issueLink, function(err, res, html){
        issueData(html,issueLink,jsonFileLink);
    })

}



function issueData(data,issueLink,jsonFileLink){

    let issCh = cheerio.load(data);

    let totalIssue = issCh(".flex-auto.min-width-0.p-2>a");
    let totalIssLink = issCh(".flex-auto.min-width-0.p-2  span.opened-by");
    //console.log(totalIssue.length);
    for(let i=0; i<5; i++){
         
        let IssuekaName = issCh(totalIssue[i]).text();
        //console.log(oneIssue);
        let OneLink = issCh(totalIssLink[i]).text().trim().split(" ")[0].split("#")[1];
        //console.log(OneLink);
        IssuekaLink = issueLink +"/"+ OneLink;
        
        
        if(i==0){

            phlaIssue(jsonFileLink, IssuekaName, IssuekaLink);

        }
        else{
              
            UpdateIssue(jsonFileLink, IssuekaName, IssuekaLink);
        }
        
    
    }
}


function phlaIssue(jsonFileLink, IssuekaName, IssuekaLink){

    let issueFile = [];
    let issueDetail = {
         issueName : IssuekaName,
         issueeLink : IssuekaLink
    }

    issueFile.push(issueDetail);
    fs.writeFileSync(jsonFileLink, JSON.stringify(issueFile) );

}




function UpdateIssue(jsonFileLink, IssuekaName, IssuekaLink){

    let fileDetails = fs.readFileSync(jsonFileLink);
    fileDetails = JSON.parse(fileDetails);

    let issueDetail = {
        issueName : IssuekaName,
        issueeLink : IssuekaLink
   }

   fileDetails.push(issueDetail);
   fs.writeFileSync(jsonFileLink, JSON.stringify(fileDetails) );
}


module.exports = processFileLink;

