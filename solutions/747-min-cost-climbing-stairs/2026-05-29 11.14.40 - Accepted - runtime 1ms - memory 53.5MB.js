/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

    let dp1 = cost[0];
    let dp2 = cost[1];
    let n = cost.length;
    for (let i = 2; i < n; i++) {
        let temp = dp2
        dp2 = cost[i] + Math.min(dp1, dp2)
        dp1 = temp
    }

    return Math.min(dp1, dp2)
};