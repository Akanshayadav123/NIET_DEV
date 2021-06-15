// loop // recursive code ??
let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

for(let i=0; i<files.length; i++){
      
    let pendingPromise = fs.promises.readFile(files[i]);

    pendingPromise.then(function(data){
        console.log(data+"");
    })

    pendingPromise.catch(function(error){
        console.log("error");
    })

}