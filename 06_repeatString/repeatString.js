const repeatString = function(string, num) {
    if (num >= 0)
    {
        let retval = ""
        for (let i = 0; i < num; i++) {
            retval += string;
        }
        return retval;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
