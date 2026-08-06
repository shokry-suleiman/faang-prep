/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    let n1 = s1.length;
    let n2 = s2.length;

    if (n1 + n2 != s3.length)
        return false;

    let dp = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(false));
    dp[0][0] = true

    for (let i = 0; i <= n1; i++) {
        for (let j = 0; j <= n2; j++) {
            if (i == 0 && j == 0) continue;
            if ((s1[i - 1] == s3[i + j - 1] && dp[i - 1][j]) || (s2[j - 1] == s3[i + j - 1] && dp[i][j - 1])) {
                dp[i][j] = true
            }

        }
    }

    return dp[n1][n2]
};