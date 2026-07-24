/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1));
    return paths(m, n, m - 1, n - 1, dp);
};

var paths = function (m, n, i, j, dp) {
    if (i < 0 || j < 0 )
        return 0;

    if (i == 0 && j == 0)
        return 1

    if (dp[i][j] != -1)
        return dp[i][j]

    dp[i][j] = paths(m, n, i - 1, j, dp) + paths(m, n, i, j - 1, dp)
    
    return dp[i][j]
}