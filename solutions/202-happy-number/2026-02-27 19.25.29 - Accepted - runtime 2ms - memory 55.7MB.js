/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const seen = {}
    let digits = String(n)

    while (seen[digits] == null) {
        seen[digits] = digits
        let sum = 0
        for (let i = 0; i < digits.length; i++)
            sum += Math.pow(+digits.at(i), 2)

        if (sum == 1)
            return true
        digits = String(sum)
    }


    return false
};