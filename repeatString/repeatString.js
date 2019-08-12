const repeatString = function(inputString, count) {
    let i = 0;
    let outputString = "";
    if(count < 0){
        return "ERROR";
    }
    while (i<count){
        outputString += inputString;
        i++;
    }
    return outputString;
}

module.exports = repeatString
