const removeFromArray = function(inputArray, target1, target2, target3, target4) {
    let outputArray = removeItem(inputArray, target1);
    if(target2 != undefined){
        removeItem(outputArray, target2);
    }
    if(target3 != undefined){
        removeItem(outputArray, target3);
    }
    if(target4 != undefined){
        removeItem(outputArray, target4);
    }
    return outputArray;
}
function removeItem (inputArray, target){
    let i = 0;
    let output;
    for(i=0; i<inputArray.length; i++){
        if(inputArray[i] === target){
            inputArray.splice(i, 1);
        }
    }
    return inputArray;
}

module.exports = removeFromArray
