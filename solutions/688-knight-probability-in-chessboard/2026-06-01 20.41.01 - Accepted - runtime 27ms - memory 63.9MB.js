/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    let dp = Array.from({ length: k + 1 }, () =>
        Array.from({ length: n }, () => new Array(n).fill(0))
    )
    return propirty(n, k, row, column, dp)
};

var propirty = function (n, k, row, column, dp) {
    if (row < 0 || row >= n || column < 0 || column >= n)
        return 0
    if (k == 0)
        return 1;
    if(dp[k][row][column]!=0) return dp[k][row][column]
    let dirs = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]
    for (let [dr, dc] of dirs) {
        let nr = row + dr;
        let nc = column + dc;
        dp[k][row][column] +=propirty(n, k - 1, nr, nc, dp) / 8
    }

    return dp[k][row][column]
}