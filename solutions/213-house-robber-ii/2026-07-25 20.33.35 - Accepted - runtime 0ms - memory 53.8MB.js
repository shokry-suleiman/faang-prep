/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    let n = nums.length - 1;
    let dp1 = new Array(n).fill(-1);
    let dp2 = new Array(n).fill(-1);
    return Math.max(maxAmount(nums.slice(1), n - 1, dp1), maxAmount(nums.slice(0, n), n - 1, dp2))
};

var maxAmount = function (nums, i, dp) {
    if (i < 0)
        return 0
    if (i < 1)
        return nums[i]

    if (dp[i] != -1)
        return dp[i];

    dp[i] = Math.max(maxAmount(nums, i - 1, dp), maxAmount(nums, i - 2, dp) + nums[i])
    return dp[i]
}