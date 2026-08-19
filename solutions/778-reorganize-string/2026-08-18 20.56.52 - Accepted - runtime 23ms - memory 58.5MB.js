/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let count = {};
    let prev = null;
    let maxHeap = new MaxPriorityQueue((item) => item.freq);
    let res = '';

    for (let char of s)
        count[char] = (count[char] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue({ val: key, freq: count[key] })

    while (maxHeap.size() || prev) {
        if (maxHeap.size() == 0)
            return "";


        let item = maxHeap.dequeue();
        res += item.val
        item.freq--;

        if (prev) {
            maxHeap.enqueue(prev)
            prev = null;
        };
        
        if (item.freq > 0)
            prev = item

    }

    return res
};