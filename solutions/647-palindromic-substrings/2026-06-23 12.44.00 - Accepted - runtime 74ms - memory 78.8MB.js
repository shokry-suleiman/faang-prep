/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0;
    let n = s.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(-1));
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (isPalindrome(s, i, j, dp)) count++;
        }
    }
    return count;
};

var isPalindrome = function (s, i, j, dp) {
    if (dp[i][j] != -1)
        return dp[i][j]
    if (i >= j)
        dp[i][j] = true;
    else if (s[i] == s[j]) dp[i][j] = isPalindrome(s, i + 1, j - 1, dp);
    else if (s[i] != s[j]) dp[i][j] = false
    return dp[i][j]
}