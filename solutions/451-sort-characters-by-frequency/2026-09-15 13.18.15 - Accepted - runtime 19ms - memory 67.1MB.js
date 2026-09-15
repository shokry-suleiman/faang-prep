/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let count = {}
    let maxHeap = new MaxPriorityQueue((it) => it.freq);
    let res = '';

    for (let char of s)
        count[char] = (count[char] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue({ char: key, freq: count[key] })

    while (maxHeap.size()) {
        let { char, freq } = maxHeap.dequeue()
        for (let i = 0; i < freq; i++)
            res += char;
    }

    return res;
};