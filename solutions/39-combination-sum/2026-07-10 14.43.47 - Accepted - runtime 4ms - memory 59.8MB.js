/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let path = [];

    var backtrack = function (start, sum) {
        if (sum > target)
            return
        if (sum == target) {
            res.push([...path])
            return res;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtrack(i, sum + candidates[i])
            path.pop()
        }
    }

    backtrack(0, 0)

    return res;
};