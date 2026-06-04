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
    );
    return probability(n, k, row, column, dp)
};

var probability = function (n, k, row, col, dp) {
    if (row < 0 || row >= n || col < 0 || col >= n)
        return 0
    if (k == 0)
        return 1
    if(dp[k][row][col] !=0) return dp[k][row][col]

    let directions = [[1, -2], [1, 2], [2, -1], [2, 1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]
    
    for (let [dr, dc] of directions) {
        let nr=row+dr
        let nc=col+dc
        dp[k][row][col] += probability(n, k - 1, nr, nc, dp) / 8
    }
    return dp[k][row][col]
}