const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, num) => sum * num);
};

const power = function(num, pow) {
  let result = num;
	for (let i = 1; i < pow; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(n) {
  if ((n === 0) || (n === 1)) return 1;
  return n * factorial(n - 1);
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
