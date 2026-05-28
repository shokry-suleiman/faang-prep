/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            sum = nums[left] + nums[right];
            if (sum < target) left++
            if (sum > target) right--
            if (sum === target) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++
                right--
            }

        }
    }
    return res
};