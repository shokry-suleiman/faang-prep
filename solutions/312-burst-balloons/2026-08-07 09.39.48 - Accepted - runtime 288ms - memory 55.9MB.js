/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let ballons = [1, ...nums, 1];
    let n = ballons.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(0))
    return maxAmount(ballons, 1, n - 2, dp)
};

var maxAmount = function (ballons, left, right, dp) {

    if (left > right)
        return 0

    if (dp[left][right] != 0)
        return dp[left][right];

    for (let i = left; i <= right; i++) {
        let coins = ballons[left - 1] * ballons[i] * ballons[right + 1] +
            maxAmount(ballons, left, i - 1, dp) +
            maxAmount(ballons, i + 1, right, dp);
        dp[left][right] = Math.max(coins, dp[left][right])
    }
    
    return dp[left][right]
}