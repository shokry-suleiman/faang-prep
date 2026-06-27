/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from({ length: m }, () => new Array(n).fill(Infinity))
    return getPath(grid, m, n, 0, 0, dp)
};

var getPath = function (grid, m, n, i, j, dp) {
    if (i >= m || j >= n)
        return Infinity
    if (i === m - 1 && j === n - 1) return grid[i][j];

    if (dp[i][j] != Infinity)
        return dp[i][j];
    dp[i][j] = grid[i][j] + Math.min(getPath(grid, m, n, i, j + 1, dp), getPath(grid, m, n, i + 1, j, dp))
    return dp[i][j]
}