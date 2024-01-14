const leapYears = function(year) {
    if(year % 4 === 0){ 
        if ((year % 100 !== 0) || (year % 400 === 0)){ //divisable by 400; or divisable by 4 & not by 100//
            return true;
        }
        else{ 
            return false;
        }
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
