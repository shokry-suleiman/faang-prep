/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = Array.from({ length: amount+1 }, () => Infinity);
    dp[0]=0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < n; j++) {
            if(i-coins[j]>=0)
            dp[i]= Math.min(dp[i],dp[i-coins[j]]+1)
        }
    }


    return dp[amount] === Infinity ? -1 : dp[amount]
};