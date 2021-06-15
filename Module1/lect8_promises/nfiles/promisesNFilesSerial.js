let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

let i=0;
function call(){

    let pendingPromise = fs.promises.readFile(files[i]);
    i=i+1;
    pendingPromise.then(function(data){
        
        console.log(data+"");

        if(i < files.length){
            call();
        }
    })

    pendingPromise.catch(function(error){
        console.log("error");
    })

}

call();