/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let results = [];
    let path = [];
    let nums = new Array(n);

    for (let i = 0; i < n; i++)
        nums[i] = i + 1;

    function backtrack(start) {
        if (path.length == k) {
            results.push([...path]);
            return results;
        }

        for (let i = start; i < n; i++) {
            path.push(nums[i]);
            backtrack(i + 1)
            path.pop()
        }

    }

    backtrack(0);
    return results;
};