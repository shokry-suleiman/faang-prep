/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let result = 0;
    let sign = 1;
    const MAX_INT = 2147483647;
    const MINI_INT = -2147483648;
    while (s[0] == ' ') {
        s = s.substring(1);
    }
    if (s[0] == '-' || s[0] == '+') {
        sign = s[0] == '-' ? -1 : sign;
        s = s.substring(1);
    }
    for (let i = 0; i < s.length; i++) {

        if (s[i] >= '0' && s[i] <= '9') {
            const digit = parseInt(s[i], 10);
            if (sign == 1 && (result > Math.floor(MAX_INT / 10) || (result == Math.floor(MAX_INT / 10) && digit > 7)))
                return MAX_INT
            if (sign == -1 && (result > Math.floor(MAX_INT / 10) || (result == Math.floor(MAX_INT / 10) && digit > 8)))
                return MINI_INT
            result = result * 10 + digit
        } else {
            break
        }
    }




    return result * sign
};