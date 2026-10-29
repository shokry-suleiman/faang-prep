/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 0;
    let r = Math.max(...piles);
    let min = r;

    while (l <= r) {
        let k = l + r >> 1;
        let hours = 0;

        for (let p of piles)
            hours += Math.ceil(p / k)

        if (hours <= h) {
            min = Math.min(min, k)
            r = k - 1;
        }
        else {
            l = k + 1
        }
    }

    return min
};