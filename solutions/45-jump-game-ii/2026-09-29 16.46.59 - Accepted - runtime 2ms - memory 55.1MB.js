/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let l = 0;
    let r = 0;
    let count = 0;
    while (r < nums.length - 1) {
        let furthest = 0;
        for (let i = l; i <= r; i++)
            furthest = Math.max(furthest, i + nums[i]);
        l = r + 1;
        count += 1;
        r = furthest
    }
    return count
};