/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let res = 0;
    let l=0;
    let r = 0;

    while (r < nums.length - 1) {
        let furthest = 0
        for (let i = l; i <= r; i++)
            furthest = Math.max(furthest, i + nums[i])
        l = r + 1;
        r = furthest
        res += 1
    }
    return res;
};