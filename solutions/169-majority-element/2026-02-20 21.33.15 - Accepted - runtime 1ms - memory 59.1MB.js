/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const majority = {}

    // for (let i = 0; i < nums.length; i++) {
    //     if (majority[nums[i]] != null) {
    //         majority[nums[i]] = majority[nums[i]] + 1;
    //     } else {
    //         majority[nums[i]] = 0;
    //     }
    // }
    // let max = Math.max(...Object.values(majority));
    // for (let key of Object.keys(majority)) {
    //     if (majority[key] == max) 
    //         return +key
    // }
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        // If count is 0, we pick the current number as our new candidate
        if (count === 0) {
            candidate = num;
        }

        // If the number matches the candidate, increment; otherwise, decrement
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};