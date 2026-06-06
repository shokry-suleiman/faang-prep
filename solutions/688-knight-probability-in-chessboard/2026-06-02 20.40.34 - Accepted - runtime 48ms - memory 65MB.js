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
    let directions = [[1, 2], [1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1], [-1, 2], [-1, -2]];
    dp[0][row][column] = 1;
    for (let step = 1; step <= k; step++) {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                for (let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n)
                        dp[step][nr][nc] += dp[step - 1][r][c] / 8

                }
            }
        }
    }

    let sum = 0;
    for (let it of dp[k])
        for (let val of it)
            sum += val
    return sum
};