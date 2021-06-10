let fs = require("fs");
let {applySFlag, applyNFlag, applyBFlag} = require("./util");

let input = process.argv.slice(2);

let flag =[];
let file =[];

for(let i=0; i<input.length; i++){
    if(input[i].startsWith("-")){
        if(!flag.includes(input[i])){
            flag.push(input[i]);
        }
    }
    else{
        if(!file.includes(input[i])){
            file.push(input[i]);
        }
    }
}

let data ="";

for(let i=0; i<file.length; i++){

    let filekadata = fs.readFileSync(file[i]);
    data+= i == file.length-1 ? filekadata : filekadata+"\r\n";
}


if(flag.includes("-s")){
    data = applySFlag(data);
}

if(flag.includes("-n") && flag.includes("-b")){

    if(flag.indexOf("-n") < flag.indexOf("-b")){
        data = applyNFlag(data);
    }
    else{
        data = applyBFlag(data);
    }

}
else if(flag.includes("-b")){
    data = applyBFlag(data);
}
else if(flag.includes("-n")){
    data = applyNFlag(data);
}

console.log(data);