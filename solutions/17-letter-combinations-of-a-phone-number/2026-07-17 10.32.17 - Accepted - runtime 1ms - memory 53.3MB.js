/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let n = digits.length;
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let results = [];
    let path = [];

    function backtrack(index){
        if(index==n){
            results.push(path.join(''));
            return results;
        }
            
        for(let i=0; i< map[digits[index]].length; i++){
            path.push(map[digits[index]].charAt(i));
            backtrack(index+1)
            path.pop()
        }
    }

    backtrack(0);

    return results
};

