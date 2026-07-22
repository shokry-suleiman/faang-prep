/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    let path = [];

    function backtrack(open, close) {
        if (path.length == 2 * n) {
            result.push(path.join(''))
            return
        }

        if (open<n) {
            path.push('(')
            backtrack(open + 1, close);
            path.pop()
        }

        if (open > close) {
            path.push(')')
            backtrack(open, close + 1)
            path.pop()

        }
    }

    backtrack(0, 0);
    return result;
};