const reverseString = function(inputString) {
    let outputString = "";
    let currentIndex = inputString.length -1;
    while(currentIndex >= 0){
        let currentChar = inputString.charAt(currentIndex);
        currentIndex--;
        outputString + currentChar;
    }
    return outputString;
}
console.log(reverseString("input String"));
module.exports = reverseString
