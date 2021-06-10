function applySFlag(data){

    let dataComp = data.split("\r\n");
    let nonEmptydata = false;
    let sFlagData = [];

    for(let i=0; i<dataComp.length; i++){

        if(dataComp[i]!=''){

            sFlagData.push(dataComp[i]);
            nonEmptydata = true;
        }

        else if(dataComp[i]=='' && dataComp[i-1]!='' && nonEmptydata){
            sFlagData.push(dataComp[i]);
        }
    }

    let sFlagString = sFlagData.join("\r\n");
    return sFlagString;
}




function applyNFlag(data){

    let dataComp = data.split("\r\n");
    let count =1;

    for(let i=0; i<dataComp.length; i++){

        dataComp[i] = `${count}.${dataComp[i]}`;
        count++;
    }

    let NFlagString = dataComp.join("\r\n");
    return NFlagString;
}





function applyBFlag(data){

    let dataComp = data.split("\r\n");
    let count = 1;

    for(let i=0; i<dataComp.length; i++){

        if(dataComp[i]!=''){
        dataComp[i] = `${count}.${dataComp[i]}`;
        count++;
        }
    }

    let BFlagString = dataComp.join("\r\n");
    return BFlagString;

}


module.exports.applySFlag = applySFlag;
module.exports.applyNFlag = applyNFlag;
module.exports.applyBFlag = applyBFlag;
