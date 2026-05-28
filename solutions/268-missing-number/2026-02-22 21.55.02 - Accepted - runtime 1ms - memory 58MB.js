/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0;
    let totalSum = 0;
    let i = 0;


    for (let i = 0; i <= nums.length; i++) {
        if (i == nums.length) {
            totalSum += i
            break
        }
        totalSum += i

        sum += nums[i]
    }
    return totalSum - sum

};