/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        let s1 = stones[0];
        let s2 = stones[1]
        if (s1 == s2) {
            stones.splice(0, 2);
        } else {
            stones.splice(0, 2);
            stones.push(s1 - s2)
        }
    }
    return stones.length == 1 ? stones[0] : 0

};