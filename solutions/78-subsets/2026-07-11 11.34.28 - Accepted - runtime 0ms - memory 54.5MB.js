/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let path = [];

    var backtrack = function (i) {
        if(i>=nums.length){
            res.push([...path])
            return res;
        }

        path.push(nums[i]);
        backtrack(i+1)

        path.pop();
        backtrack(i+1)
    }

    backtrack(0);
    return res;
};