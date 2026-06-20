/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1
            if (i == j)
                dp[i][j] += 1
            else if (s[i] == s[j] && i < j) {
                if (len == 2) {
                    dp[i][j] = 2
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                }
            } else if (s[i] != s[j]) {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }

        }
    }

    let max = 0;
    for (let it of dp)
        for (let val of it)
            max = Math.max(max, val)
    return max
}; 