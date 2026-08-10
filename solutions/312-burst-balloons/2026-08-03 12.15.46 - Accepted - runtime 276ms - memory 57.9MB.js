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

var maxAmount = function (nums, left, right, dp) {

    if (left > right)
        return 0

    if (dp[left][right] != 0) return dp[left][right];

    for (let i = left; i <= right; i++) {
        let coins = nums[left-1] * nums[i] * nums[right+1];
        coins += maxAmount(nums, left,i-1,dp)+  maxAmount(nums, i+1,right,dp)
        dp[left][right] = Math.max(dp[left][right],coins)
    }

    return dp[left][right]
}