/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max_sum = nums[0];
    let current_sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
            if(nums[i] + current_sum>nums[i])
                current_sum+=nums[i]
            else 
                current_sum=nums[i]

            max_sum = Math.max(current_sum,max_sum)
    
    } 
    return max_sum
};

