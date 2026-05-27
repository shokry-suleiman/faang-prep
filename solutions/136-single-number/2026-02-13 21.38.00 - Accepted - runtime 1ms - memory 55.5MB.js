/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let unique = 0;
    let i = 0;
    while (i < nums.length) {
        unique ^= nums[i]
            i++
    }
    return unique
};