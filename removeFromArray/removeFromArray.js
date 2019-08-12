const removeFromArray = function(inputArray, target1, target2, target3) {
    removeItem(inputArray, target1);
    console.log(target1);
    if(target2 != null){
        removeItem(inputArray, target2);
    }
    if(target3 != null){
        removeItem(inputArray, target3);
    }
}
function removeItem (inputArray, target){
    let i = 0;
    let finalIndex = inputArray.length - 1;
    while(i<= finalIndex){
        if(inputArray[i] === target){
            inputArray.splice(i, 1);
            break;
        }
        i++
    }
}

module.exports = removeFromArray
