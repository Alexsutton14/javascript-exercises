const fibonacci = function(request) {
    let previous1 = 1;
    let previous2 = 1;
    let currentValue = 1;
    if(request < 1){
        return "OOPS"
    }
    if (request <= 2){
        return 1;
    }
    for(let i = 3; i <= request; i++){
        currentValue = (previous1 + previous2);
        previous1 = previous2;
        previous2 = currentValue;
    }
    return currentValue;
}

module.exports = fibonacci
