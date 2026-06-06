/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let indx = Math.abs(nums[i]) - 1
        if (nums[indx] > 0)
            nums[indx] = nums[indx] * -1;
        else
            res.push(Math.abs(nums[i]))
    }

    return res
};