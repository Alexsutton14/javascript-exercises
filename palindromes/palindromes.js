const palindromes = function(inputString) {
    console.log(`Input string: ${inputString}`);
    let reversedString = reverseString(inputString);
    if (reversedString === inputString){
        return true;
    } else {
        return false;
    }
}

const reverseString = function(inputString) {
    let outputString = "";
    let currentIndex = inputString.length -1;
    while(currentIndex >= 0){
        let currentChar = inputString.charAt(currentIndex);
        currentIndex--;
        outputString + currentChar;
    }
    console.log(`Reversed string: ${outputString}`);
    return outputString;
}

module.exports = palindromes
