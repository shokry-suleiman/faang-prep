/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1
    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++
        }
        while (left < right && !isAlphaNumeric(s[right])) {
            right--
        }
        if (s[right].toLowerCase() != s[left].toLowerCase()) {
            return false
        }

        left++
        right--
    }
    return true
}




function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57);
}