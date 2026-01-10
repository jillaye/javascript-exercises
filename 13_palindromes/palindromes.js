const palindromes = function (input) {
    input = input.toLowerCase();
    let chars = input.match(/[a-zA-Z0-9]/g)
    isPalindrome = true;
    end = chars.length - 1;
    mid = Math.ceil(end/2);
    for (let i = 0; i < mid; i++) {
        if (chars[i] !== chars[end -i]) {
            isPalindrome = false;
            break
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
