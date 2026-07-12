/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let n = s.length;
    let path = [];
    let res = [];

    function backtrack(start) {
        if (start >= s.length) {
            res.push([...path]);
            return res;
        }

        for (let i = start; i < n; i++) {
            if (isPalin(s,start, i)) {
                path.push(s.substring(start, i + 1));
                backtrack(i + 1)
                path.pop()
            }
        }
    }

    backtrack(0);
    return res;
};

var isPalin = function (s, start, end) {
    while (start <= end) {
        if (s[start] != s[end])
            return false;
        start++;
        end--
    }
    return true
}