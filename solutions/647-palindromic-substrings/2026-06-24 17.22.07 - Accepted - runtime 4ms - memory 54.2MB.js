/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let n = s.length;
    let t = new Array((2 * n) + 1).fill('#');
    let count = 0;
    for (let i = 0; i < n; i++)
        t[(i * 2) + 1] = s[i];

    let m = t.length
    let C = 0;
    let R = 0;
    let p = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        let mir = 2 * C - i;
        if (R > i)
            p[i] = Math.min(p[mir], R - i)

        let leftBound = i - p[i] - 1;
        let rightBoud = i + p[i] + 1;

        while (leftBound >= 0 && rightBoud < m && t[leftBound] == t[rightBoud]) {
            p[i] += 1;
            leftBound = i - p[i] - 1
            rightBoud = i + p[i] + 1
            newPalindromic=true
        }

        count+=Math.floor((p[i]+1)/2)

        if (i + p[i] > R) {
            C = i;
            R = p[i] + i
        }
        
    }
    return count
};