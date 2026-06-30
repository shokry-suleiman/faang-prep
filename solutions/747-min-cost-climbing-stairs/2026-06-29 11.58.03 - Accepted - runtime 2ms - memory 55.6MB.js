/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(-1);
    return Math.min(minCost(cost, n - 1, dp), minCost(cost, n - 2, dp))
};

var minCost = function (cost, i, dp) {
    if (i < 0)
        return 0;
    if (i < 2)
        return cost[i];

    if (dp[i] != -1)
        return dp[i];
    dp[i] = cost[i] + Math.min(minCost(cost, i - 1, dp), minCost(cost, i - 2, dp));
    return dp[i]
}