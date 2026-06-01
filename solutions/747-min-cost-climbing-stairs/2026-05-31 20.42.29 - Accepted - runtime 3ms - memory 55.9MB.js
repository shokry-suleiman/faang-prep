/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [];
    let n = cost.length
    return Math.min(getMinCost(cost, n - 1, dp), getMinCost(cost, n - 2, dp))
};

var getMinCost = function (cost, i, dp) {
    if (dp[i] !== undefined)
        return dp[i]
    if (i == 0 || i == 1)
        return cost[i]
    dp[i] = cost[i] + Math.min(getMinCost(cost, i - 1, dp), getMinCost(cost, i - 2, dp))
    return dp[i]
}