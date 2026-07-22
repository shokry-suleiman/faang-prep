/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    let currMin = nums[0];
    let currMax = nums[0];
    let result = nums[0];

    for (let i = 1; i < n; i++) {
        let [prevMin, prevMax] = [currMin, currMax]
        currMin = Math.min(nums[i], nums[i] * currMin, nums[i] * prevMax);
        currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * prevMin);
        result = Math.max(result, currMax)
    }
    return result
};