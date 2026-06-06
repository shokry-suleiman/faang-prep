/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    let dp = Array.from({ length: k + 1 }, () =>
        Array.from({ length: n }, () =>
            new Array(n).fill(0)
        )
    )
    return probability(k, row, column, n, dp)
};


var probability = function (k, r, c, n, dp) {
    if (r < 0 || c < 0 || c >= n || r >= n) return 0
    if (k === 0) return 1
    if (dp[k][r][c] != 0) return dp[k][r][c]
    let dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, -2], [1, 2], [-1, 2], [-1, -2]]
    for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;
        dp[k][r][c] += probability(k - 1, nr, nc, n, dp) / 8;

    }
    return dp[k][r][c]
}