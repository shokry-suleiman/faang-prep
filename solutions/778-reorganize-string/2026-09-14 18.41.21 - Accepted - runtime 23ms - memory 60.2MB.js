/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let count = {};
    let maxHeap = new MaxPriorityQueue((it) => it.freq);
    let prev = null;
    let res = "";

    for (let char of s)
        count[char] = (count[char] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue({ char: key, freq: count[key] });

    while (maxHeap.size() || prev) {

        if (!maxHeap.size() && prev)
            return "";

        let { char, freq } = maxHeap.dequeue();
        res += char;
        freq--;

        if (prev) {
            let [freq, char] = prev;
            maxHeap.enqueue({ char: char, freq: freq })
            prev = null
        }

        if (freq > 0)
            prev = [freq, char]
    }

    return res;
};