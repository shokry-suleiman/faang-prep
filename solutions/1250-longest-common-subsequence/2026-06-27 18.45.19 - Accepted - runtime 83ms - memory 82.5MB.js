/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let n1 = text1.length;
    let n2 = text2.length;
    let dp = Array.from({ length: n1 }, () => new Array(n2).fill(-1))
    return lcs(text1, text2, n1, n2, 0, 0, dp);
};

var lcs = function (t1, t2, n1, n2, i, j, dp) {
    if (i >= n1 || j >= n2)
        return 0;
    if (dp[i][j] != -1)
        return dp[i][j];
    if (t1[i] == t2[j])
        dp[i][j] = 1 + lcs(t1, t2, n1, n2, i + 1, j + 1, dp)
    else
        dp[i][j] = Math.max(lcs(t1, t2, n1, n2, i, j + 1, dp), lcs(t1, t2, n1, n2, i + 1, j, dp))
    return dp[i][j]
}