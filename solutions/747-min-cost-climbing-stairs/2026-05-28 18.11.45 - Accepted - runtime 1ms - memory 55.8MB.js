/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp=[]
    let n = cost.length;
    return Math.min(getCost(cost, dp, n - 1), getCost(cost, dp, n - 2))
};

var getCost = function (cost, dp = [], indx) {
    if (dp[indx] != undefined) return dp[indx]
    if (indx < 0)
        return 0
    if (indx === 0)
        return cost[0];
    if (indx === 1)
        return cost[1]
    dp[indx] = cost[indx] + Math.min(getCost(cost, dp, indx - 1), getCost(cost, dp, indx - 2))
    return dp[indx]
}