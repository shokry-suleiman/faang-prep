/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let n = s.length;
    let t = new Array(2 * n + 1).fill('#');
    let m = t.length;
    let count=0;
    for (let i = 0; i < n; i++)
        t[i * 2 + 1] = s[i];

    let R = 0;
    let C = 0;
    let p = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        let mir = 2 * C - i;

        if (i < R)
            p[i] = Math.min(p[mir], R - i);

        let left = i - p[i] - 1;
        let right = i + p[i] + 1;

        while (left >= 0 && right < m && t[left] == t[right]) {
            p[i] += 1;
            left = i - p[i] - 1;
            right = i + p[i] + 1;
        }
        count+=Math.floor((p[i]+1)/2)
        if(i+p[i]>R){
            C=i
            R= p[i]+i
        }

    }
    return count;
};