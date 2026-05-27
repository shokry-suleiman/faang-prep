/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    // if (n == 0)
    //     return false
    // if (n < 0)
    //     return false
    // while (n > 0) {
    //     if (n == 1)
    //         return true
    //     n = n / 3
    // }
    // return false
        return n > 0 && 1162261467 % n === 0;

};