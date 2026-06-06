/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let s = [];
    let res = 0;
    let t1 = 0;
    let t2 = 0;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+") {
            t1 = s.pop();
            t2 = s.pop();
            res = t1 + t2;
            s.push(res)
        } else if (tokens[i] == "-") {
            t1 = s.pop();
            t2 = s.pop();
            res = t2 - t1;
            s.push(res)
        } else if (tokens[i] == "*") {
            t1 = s.pop();
            t2 = s.pop();
            res = t2 * t1;
            s.push(res)
        } else if (tokens[i] == "/") {
            t1 = s.pop();
            t2 = s.pop();
            res = Math.trunc(t2 / t1)
            s.push(res)
        } else {
            s.push(+tokens[i])
        }
    }
    return s[0]
};