/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(null));
    return findPath(m, n, 0, 0, dp);
};

var findPath = function (m, n, i, j, dp) {

    if (i >= m || j >= n)
        return 0
    
    if (i == m - 1 && j == n - 1)
        return 1

    if(dp[i][j] !=null)
        return dp[i][j]

    dp[i][j] = findPath(m, n, i, j + 1, dp) + findPath(m, n, i + 1, j, dp)
    return dp[i][j]
}