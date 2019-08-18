const cleanString = function(inputString){
    let outputString = "";
    let currentChar;
    for(let i=0; i < inputString.length; i++){
        currentChar = inputString.charAt(i);
        if(currentChar.match(/[A-Za-z]/)){
            outputString += currentChar;
        }
    }
    outputString = outputString.toLowerCase();
    return outputString;
}

const reverseString = function(inputString) {
    let outputString = "";
    let currentIndex = inputString.length -1;
    while(currentIndex >= 0){
        let currentChar = inputString.charAt(currentIndex);
        currentIndex--;
        outputString += currentChar;
    }
    return outputString;
}

function palindromes(inputString) {
    //cleans string of punctuation, spaces and capital letters
    let cleanedString = cleanString(inputString);
    //generates reversed string
    let reversedString = reverseString(cleanedString);
    //compares strings
    if (reversedString === cleanedString){
        return true;
    } else {
        return false;
    }
}
module.exports = palindromes
