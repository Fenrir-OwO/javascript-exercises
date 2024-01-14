var removeFromArray = function(arr, ...args) {
    return arr.filter(val => !args.includes(val))
};
//what I think happened here is, the fucntion takes the array and indefinite number of args to remove from that array. If we wanna use the filter() method, first it iterates through the array , and each items is stored in val, then the arrow function basically checks if that specific val or in the broader case, the arg, is similar to any arg present in args, that that val is filtered out from the array. This iteration is done for every single element in the array and finally we return an array that has no element of from args.....




// Do not edit below this line
module.exports = removeFromArray;
