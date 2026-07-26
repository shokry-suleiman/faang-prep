/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1);
    return maxAmount(nums, n - 1, dp);
};

var maxAmount = function (nums, i, dp) {
    if (i < 0)
        return 0;

    if (i < 1)
        return nums[0];

    if (dp[i] != -1)
        return dp[i];

    dp[i] = Math.max(maxAmount(nums, i - 1, dp), maxAmount(nums, i - 2, dp) + nums[i]);

    return dp[i]
}
