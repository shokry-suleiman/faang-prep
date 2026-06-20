/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0;
    let n = s.length;
    let memo={}
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (isPalindromic(s, i, j,memo)) count++
        }
    }
    return count
};

var isPalindromic = function (s, i, j,memo) {
    if (memo[`${i}-${j}`] != undefined)
        return memo[`${i}-${j}`]
    if (i >= j)
        memo[`${i}-${j}`] = true

    else if (s[i] != s[j]) memo[`${i}-${j}`] = false;
    else if (s[i] == s[j]) memo[`${i}-${j}`] = isPalindromic(s, i + 1, j - 1, memo)

    return memo[`${i}-${j}`]
}