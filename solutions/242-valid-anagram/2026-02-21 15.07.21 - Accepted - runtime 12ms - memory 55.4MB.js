/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length)
        return false
    let sMap = {}
    let tMap = {}

    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] == null) {
            sMap[s[i]] = 1
        } else {
            sMap[s[i]] += 1;
        }
        if (tMap[t[i]] == null) {
            tMap[t[i]] = 1
        } else {
            tMap[t[i]] += 1;
        }
    }

    for (let key in tMap)
        if (tMap[key] != sMap[key])
            return false;
    return true

    // if (s.length !== t.length) return false;

    // const count = {};

    // // 2. Map frequencies from string 's'
    // for (let char of s) {
    //     count[char] = (count[char] || 0) + 1;
    // }

    // // 3. Decrement frequencies using string 't'
    // for (let char of t) {
    //     if (!count[char]) {
    //         // If the character doesn't exist or count is already 0
    //         return false;
    //     }
    //     count[char]--;
    // }

    // return true;
};