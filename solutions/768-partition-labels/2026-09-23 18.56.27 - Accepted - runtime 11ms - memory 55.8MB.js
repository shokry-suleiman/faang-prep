/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let lastIndxMap = {};
    let size = 0;
    let end = 0;
    let res = []

    for (let i in s)
        lastIndxMap[s[i]] = +i

    for (let i = 0; i < s.length; i++) {
        size += 1;
        end = Math.max(end, lastIndxMap[s[i]])
        if (i == end) {
            res.push(size);
            size = 0;
        }
    }

    return res;
};