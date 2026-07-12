/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length;
    let res = [];
    let path = [];
    let selected = new Array(n).fill(false)
    function backtrack() {
        if (path.length == nums.length) {
            res.push([...path])
            return res;
        }
        for (let i = 0; i < nums.length; i++) {
            if (selected[i]) continue;
            path.push(nums[i]);
            selected[i] = true;
            backtrack();
            selected[i] = false;
            path.pop()
        }
    }
    backtrack();
    return res
};