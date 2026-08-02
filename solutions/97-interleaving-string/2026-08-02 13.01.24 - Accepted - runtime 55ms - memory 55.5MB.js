/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    let m = s1.length;
    let n = s2.length;
    let k = s3.length;

    if (m + n != k) return false;

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false))
    dp[0][0] = true;

    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (i == 0 && j == 0) continue
            if (s1[i - 1] == s3[i + j - 1] && dp[i - 1][j] || s2[j - 1] == s3[i + j - 1] && dp[i][j - 1])
                dp[i][j] = true
        }
    }

    return dp[m][n]
};