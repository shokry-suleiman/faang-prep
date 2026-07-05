/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));

    return getMinPath(grid, m, n, m - 1, n - 1, dp)
};

var getMinPath = function (grid, m, n, i, j, dp) {
    if (i < 0 || j < 0)
        return Infinity;
    if (dp[i][j] != Infinity)
        return dp[i][j]

    if (i == 0 && j == 0)
        return grid[i][j];

    dp[i][j] = grid[i][j] + Math.min(getMinPath(grid, m, n, i, j - 1, dp), getMinPath(grid, m, n, i - 1, j, dp))
    return dp[i][j]

}