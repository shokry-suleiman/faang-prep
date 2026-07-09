/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length;
    let res = [];
    let path = [];
    let used = new Array(n).fill(false);
    var backtrack = function () {
        if (path.length == n) {
            res.push([...path])
            return
        }
        for (let i = 0; i < n; i++) {
            if (used[i]) continue
            used[i] = true;
            path.push(nums[i]);
            backtrack();
            used[i] = false;
            path.pop();
        }
    }
    backtrack()
    return res;
};