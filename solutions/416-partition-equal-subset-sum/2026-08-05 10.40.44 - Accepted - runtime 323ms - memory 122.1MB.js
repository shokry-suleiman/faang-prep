/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b, 0)
    let memo = new Map();
    let target = sum / 2;
    if (sum % 2 != 0)
        return false
    return isPartition(nums, n - 1, target, 0, memo)
};

var isPartition = function (nums, index, target, sum, memo) {

    if (index < 0)
        return false;

    if (sum > target)
        return false;

    if (sum == target)
        return true;

    let key = index + '-' + sum;

    if (memo.has(key))
        return memo.get(key)

    memo.set(key,
        isPartition(nums, index - 1, target, sum + nums[index], memo) ||
        isPartition(nums, index - 1, target, sum, memo)
    )
    return memo.get(key)
}