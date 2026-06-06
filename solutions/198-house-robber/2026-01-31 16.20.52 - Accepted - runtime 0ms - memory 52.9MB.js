/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // function robRec(nums, i = 0, memo = {}) {
    //     if (i in memo)
    //         return memo[i]
    //     if (i >= nums.length) 
    //         return 0;

    //     let pick = nums[i] + robRec(nums, i + 2,memo);

    //     let skip = robRec(nums, i + 1,memo);
    //     memo[i] =Math.max(pick, skip)
    //     return memo[i];
    // }
    // return robRec(nums)
    let prev1 =0
    let prev2 = 0
    for(let num of nums){
        let current = Math.max(prev1, prev2+ num)
        prev2 = prev1
        prev1 = current
    }
    return prev1
};