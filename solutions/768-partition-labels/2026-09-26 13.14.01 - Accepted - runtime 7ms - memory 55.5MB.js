/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let lastIndexMap = {};
    let count = 0;
    let end = 0;
    let res = [];

    for (let i = 0; i < s.length; i++)
        lastIndexMap[s[i]] = i;

    for (let i = 0; i < s.length; i++) {
        count += 1;
        end = Math.max(end, lastIndexMap[s[i]]);
        if(i==end){
            res.push(count);
            count=0;
        }

    }
    return res;
};