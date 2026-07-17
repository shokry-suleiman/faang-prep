/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let path = [];

    function backtrack(start) {
        if (start == s.length) {
            result.push([...path]);
            return result
        }

        
        for (let i = start; i < s.length; i++) {
            if (isPalindrome(s, start, i)) {
                path.push(s.substring(start, i+1))
                backtrack(i + 1);
                path.pop()
            }
        }
    }

    backtrack(0);
    return result;
};

var isPalindrome = function (s, i, j) {
    while (i <= j) {
        if (s[i] != s[j])
            return false
        i++;
        j--;
    }
    return true
}