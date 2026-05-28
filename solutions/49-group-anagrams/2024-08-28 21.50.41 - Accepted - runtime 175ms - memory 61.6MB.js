/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let occurrences = new Map();
    for (let indx in strs) {
        let charArr = strs.at(indx).split("").sort().join("");
        console.log(charArr);
        if (!occurrences.has(charArr)) occurrences.set(charArr, [strs[+indx]]);
        else occurrences.set(charArr, [...occurrences.get(charArr), strs[+indx]]);
    }
    return [...occurrences.values()];
};