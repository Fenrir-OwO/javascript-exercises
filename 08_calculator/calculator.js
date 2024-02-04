const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a- b;
};

const sum = function(numbers) {return numbers.reduce((concataneted, current)=>  concataneted + current, 0)
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function factorial(number) {
  if (number === 0 || number === 1){return 1} //base case factorial of 0 and 1 is always 1
  else{
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
