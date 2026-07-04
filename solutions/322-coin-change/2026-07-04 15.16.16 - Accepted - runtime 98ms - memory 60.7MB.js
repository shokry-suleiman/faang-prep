/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = Array.from({ length: n }, () => new Array(amount + 1).fill(-1));
    let ans = getCoinChange(coins, n - 1, amount, dp);
    return ans === Infinity ? -1 : ans;
};

var getCoinChange = function (coins, i, j, dp) {
    if (j == 0)
        return 0;

    if (i < 0)
        return Infinity;

    if (dp[i][j] != -1)
        return dp[i][j];

    let skip = getCoinChange(coins, i - 1, j, dp);
    let take = Infinity;

    if (j >= coins[i])
        take = getCoinChange(coins, i, j - coins[i], dp) + 1

    dp[i][j] = Math.min(take, skip)
    
    return dp[i][j]
}