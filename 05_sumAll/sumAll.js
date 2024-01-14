const sumAll = function(start,end) {
    if(!(typeof start === "number" && typeof end === "number") || (start <= 0 || end <= 0)) {
        return("ERROR"); //checks if any other type than number, and if positive
    }
    if(start>end){
        [start,end] = [end, start]; //swaps position
    }
    
    

    let sum = 0
    for (i = start; i <= end ;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
