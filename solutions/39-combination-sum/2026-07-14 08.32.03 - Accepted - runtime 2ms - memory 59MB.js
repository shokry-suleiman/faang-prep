/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    let path = []
    function backtrack(start, sum) {
        if (sum == target) {
            result.push([...path])
            return result
        }

        if (sum > target)
            return
            
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtrack(i, candidates[i] + sum)
            path.pop()
        }
    }
    backtrack(0, 0)
    return result;
};