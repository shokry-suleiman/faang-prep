/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let x = new Array(26)

    for (let i = 0; i < s.length; i++) {
        let indx = s.charCodeAt(i) - 97
        x[indx] = (x[indx] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let indx = s.charCodeAt(i) - 97
        if (x[indx] == 1)
            return i
    }
    return -1
};