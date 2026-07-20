/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1);
    return getMaxAmount(nums, n - 1, dp)
};

var getMaxAmount = function (nums, index, dp) {
    if (index < 0)
        return 0

    if (index == 0)
        return nums[0];

    if (dp[index] != -1)
        return dp[index];
        
    dp[index] = Math.max((getMaxAmount(nums, index - 2, dp) + nums[index]), getMaxAmount(nums, index - 1, dp))
    return dp[index]
}  