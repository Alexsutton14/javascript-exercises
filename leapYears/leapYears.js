const leapYears = function(inputYear) {
    if(inputYear%4 == 0 && inputYear % 100 != 0 || inputYear % 400 == 0){
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
