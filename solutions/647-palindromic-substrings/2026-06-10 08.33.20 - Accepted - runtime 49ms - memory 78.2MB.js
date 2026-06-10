/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(false));
    let count = 0;
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (i == j) {
                dp[i][j] = true;
                count++;
            } else if (s[i] == s[j] && (len == 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                count++;
            }
        }
    }

    return count;
};