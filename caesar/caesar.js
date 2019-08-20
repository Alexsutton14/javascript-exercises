function offsetLetter(inputCharCode, offset){
    if(inputCharCode < 91){
        inputCharCode += offset;
        while (inputCharCode > 90){
            inputCharCode -= 26;

        }
        while (inputCharCode < 65){
            inputCharCode += 26;
        }
    }
    if(inputCharCode > 91){
        inputCharCode += offset;
        while(inputCharCode > 122){
            inputCharCode -= 26;
        }
        while(inputCharCode < 97){
            inputCharCode += 26;
        }
    }
    return inputCharCode;
}
const caesar = function(inputString, offset) {
    let outputString = "";
    for(let i = 0; i < inputString.length; i++){
        let currentCharCode = inputString.charCodeAt(i);
        if((currentCharCode >= 65 && currentCharCode <= 90) || (currentCharCode >= 97 && currentCharCode <= 122)){
            let offsetCharCode = offsetLetter(currentCharCode, offset);
            outputString += String.fromCharCode(offsetCharCode);
        } else {
            outputString += String.fromCharCode(currentCharCode);
        }
    }
    return outputString;
}
module.exports = caesar
