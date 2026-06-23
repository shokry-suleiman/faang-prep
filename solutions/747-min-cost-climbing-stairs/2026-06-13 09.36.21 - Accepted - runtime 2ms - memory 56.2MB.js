/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [];
    let n = cost.length;
    return Math.min(getCost(cost, dp, n - 1), getCost(cost, dp, n - 2))
};

var getCost = function (cost, dp, i) {
    if(dp[i]!=undefined)
        return dp[i];
  
    if (i < 2)
        return cost[i];
    
    dp[i] = cost[i] + Math.min(getCost(cost,dp,i-1),getCost(cost,dp,i-2))
    return dp[i]
}
