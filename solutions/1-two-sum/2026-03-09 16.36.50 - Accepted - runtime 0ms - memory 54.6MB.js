/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const store = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (store[diff] != null) {
            return [store[diff], i]
        }
        store[nums[i]] = i;

    }
};