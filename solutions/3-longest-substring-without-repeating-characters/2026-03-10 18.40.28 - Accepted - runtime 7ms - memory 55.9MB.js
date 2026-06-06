/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    
    let left = 0;
    let store = new Set();
    let maxLength=0
    for (let right=0; right<s.length; right++) {
        while(store.has(s[right])){
            store.delete(s[left])
            left++
        }
        store.add(s[right])
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
};