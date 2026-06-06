/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let results = [intervals[0]];
    for (let [start, end] of intervals) {
        let lastEnd = results[results.length - 1][1]
        if (start <= lastEnd) {
            results[results.length - 1][1] = Math.max(end,lastEnd)
        } else {
            results.push([start, end])
        }
    }
    return results
};