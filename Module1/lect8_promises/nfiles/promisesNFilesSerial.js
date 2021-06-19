// let fs = require("fs");
// let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

// let i=0;
// function call(){

//     let pendingPromise = fs.promises.readFile(files[i]);
//     i=i+1;
//     pendingPromise.then(function(data){
        
//         console.log(data+"");

//         if(i < files.length){
//             call();
//         }
//     })

//     pendingPromise.catch(function(error){
//         console.log("error");
//     })

// }

// call();




let files = ["../f1.txt", "../f2.txt" , "../f3.txt"];
let fs = require("fs");
// using for loops => promises => serial code

let f1KaPromise = fs.promises.readFile(files[0]);

for(let i=1 ; i<files.length ; i++){

    f1KaPromise = f1KaPromise.then(function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(files[i]);
        return nextFilePromise;
    })

}

f1KaPromise.then(function(data){
    console.log(data+"");
})