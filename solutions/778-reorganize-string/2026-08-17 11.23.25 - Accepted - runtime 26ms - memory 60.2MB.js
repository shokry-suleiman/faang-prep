/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let count = {};
    let maxHeap = new MaxPriorityQueue((item) => item.freq)
    let res = "";
    let prev = null

    for (let char of s)
        count[char] = (count[char] || 0) + 1;

    for (let char in count)
        maxHeap.enqueue({ val: char, freq: count[char] })

    while (maxHeap.size() > 0 || prev) {
        if (prev && maxHeap.size() == 0)
            return "";



        let item = maxHeap.dequeue();
        res += item.val;
        item.freq--;
        if (prev) {
            maxHeap.enqueue(prev)
            prev = null;
        }
        if (item.freq != 0)
            prev = item

    }

    return res;
};