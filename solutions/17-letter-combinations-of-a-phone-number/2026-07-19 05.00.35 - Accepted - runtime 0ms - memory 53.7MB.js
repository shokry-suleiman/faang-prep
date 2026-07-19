/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let n = digits.length;
    let result = [];
    let path = [];
    let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    function backtrack(index) {
        if (index == n) {
            result.push(path.join(''));
            return;
        }

        for(let i=0; i<map[digits[index]].length; i++){
            path.push(map[digits[index]].charAt(i))
            backtrack(index+1)
            path.pop()
        }
    }

    backtrack(0);
    return result;
};