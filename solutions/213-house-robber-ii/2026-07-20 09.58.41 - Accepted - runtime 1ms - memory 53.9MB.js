/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    if(n===1) return nums[0]
    let dp1 = new Array(n - 1).fill(-1)
    let dp2 =new Array(n - 1).fill(-1)
    return Math.max(getMaxAmount(nums.slice(1), n - 2, dp1), getMaxAmount(nums.slice(0, n - 1), n - 2, dp2))
};

var getMaxAmount = function (nums, index, dp) {
    if (index < 0)
        return 0
    if (index == 0)
        return nums[0]
    if (dp[index] != -1)
        return dp[index]
    dp[index] = Math.max((getMaxAmount(nums, index - 2, dp) + nums[index]), getMaxAmount(nums, index - 1, dp))
    return dp[index]
}