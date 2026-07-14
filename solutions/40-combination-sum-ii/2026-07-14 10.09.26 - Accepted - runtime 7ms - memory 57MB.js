/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let results = [];
    let path = [];
    candidates.sort((a,b)=>a-b)
    function backtrack(start, sum) {
        if (sum == target) {
            results.push([...path]);
            return results
        }

        if (sum > target)
            return

        for (let i = start; i < candidates.length; i++) {
            if(i>start && candidates[i] == candidates[i-1]) continue
            path.push(candidates[i]);
            backtrack(i + 1, candidates[i] + sum)
            path.pop()
        }
    }
    backtrack(0, 0)

    return results
};