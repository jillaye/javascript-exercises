function isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
}

const sumAll = function(a, b) {
    if (isPositiveInteger(a) && isPositiveInteger(b)) {
        if (a === b) {
            return a;
        }
        let sum = 0;
        if (b > a) {
            for (let x = a; x <= b; x++) {
                sum += x; 
            }
            return sum;
        } else return sumAll (b, a);
    }
    else {
        return ("ERROR")
    }
};

// Do not edit below this line
module.exports = sumAll;
