/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0;
    let n = s.length;
    for (let center = 0; center < n; center++) {
        expand(center, center)
        expand(center, center + 1)
    }

    function expand(start, end) {
        while (start >= 0 && end < n && s[start] === s[end]) {
            count++;
            start--;
            end++;
        }
    }
    return count;
};

