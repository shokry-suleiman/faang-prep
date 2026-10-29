/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 0;
    let r = Math.max(...piles);
    let minSpeed = r;

    while (l <= r) {
        let hours = 0;
        let k = l + r >> 1;
        for (let p of piles)
            hours += Math.ceil(p / k);

        if (hours <= h) {
            r = k - 1;
            minSpeed = Math.min(minSpeed, k)
        } else {
            l = k + 1;
        }
    }

    return minSpeed;
};