/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let current = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i])
        result = Math.max(current, result)
    }

    return result
};