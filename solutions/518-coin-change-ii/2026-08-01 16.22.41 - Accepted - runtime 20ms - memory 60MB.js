/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins)
        for (let a = coin; a <= amount; a++)
            dp[a] += dp[a-coin]

    return dp[amount]
};