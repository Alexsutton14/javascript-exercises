const sumAll = function(inputA, inputB) {
    let currentSum = 0;
    let i;
    let max;
    if(typeof inputA != "number" || typeof inputB != "number"){
        return "ERROR";
    }
    if(inputA<0 || inputB < 0){
        return "ERROR";
    }
    if(inputA < inputB){
        i = inputA;
        max = inputB;
    } else if (inputA > inputB){
        i = inputB;
        max = inputA;
    }
    while (i <= max){
        currentSum += i;
        i++;
    }
    return currentSum;
}

module.exports = sumAll
