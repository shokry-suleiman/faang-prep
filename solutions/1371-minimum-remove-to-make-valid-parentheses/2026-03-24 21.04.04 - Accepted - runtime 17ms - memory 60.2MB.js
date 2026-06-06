/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const indStack = [];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(')
            indStack.push(i)
        else if (s[i] == ')' && indStack.length)
            indStack.pop()
        else if (s[i] == ')' && !indStack.length)
            s[i] = ""
    }

    while (indStack.length) 
        s[indStack.pop()] = ""
    
    return s.join("")
};