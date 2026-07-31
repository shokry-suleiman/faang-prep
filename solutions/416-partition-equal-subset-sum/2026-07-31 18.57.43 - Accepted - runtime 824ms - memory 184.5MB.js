/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((a, b) => a + b, 0)
    if (sum % 2 != 0) return false;
    let target = sum / 2;
    let memo = new Map()
    return canSum(0, nums, target, memo)
};

var canSum = function (index, nums, remaining, memo) {
    if (remaining < 0)
        return false

    if (remaining == 0)
        return true

    if (index >= nums.length)
        return false

    let key = index +'-'+remaining;
    if (memo.has(key))
        return memo.get(key)

    const res = canSum(index + 1, nums, remaining - nums[index], memo) || canSum(index + 1, nums, remaining, memo);
    memo.set(key,res)
    return memo.get(key)
}