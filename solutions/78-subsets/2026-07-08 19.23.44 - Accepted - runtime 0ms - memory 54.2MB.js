/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let path = []
    function backtrack(start) {
        if (start >= nums.length) {
            res.push([...path])
            return
        }
        path.push(nums[start])
        backtrack(start + 1)
        path.pop()
        backtrack(start + 1)
    }
    backtrack(0)
    return res;
};